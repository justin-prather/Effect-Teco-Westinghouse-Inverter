# Modbus Protocol Documentation for Teco Westinghouse Inverters

## Overview

This document provides comprehensive information about the Modbus communication protocols used in Teco Westinghouse A510, E510, and F510 inverter series. The protocols define register addressing, function code implementations, and data formats for system integration and configuration.

## Addressing Scheme

### Base Register Addresses
- **Primary Base**: 0x2500 (hexadecimal)
- **Standard Modbus Conversion**: 0x2500 + 0x4000 = Standard Modbus Address
- **Example**: Register 0x2506 → Standard Modbus 0x6506

### Register Categories
| Range | Description | Function |
|-------|-------------|----------|
| **0x2500-0x25FF** | Command & Control Registers | Device operation commands |
| **0x2520-0x252F** | Monitoring Status Registers | Real-time status data |
| **0x2600-0x26FF** | Device Monitoring | Performance and diagnostic data |
| **0x2700-0x27FF** | Parameter Registers | Configuration parameters |
| **0x2800-0x28FF** | Diagnostic Registers | System diagnostics |
| **0x2900-0x29FF** | Communication Settings | Network configuration |
| **0x2A00-0x2FFF** | Custom Parameters | User-defined settings |

## Function Codes

### Supported Modbus Functions
| Code | Name | Description | Usage |
|------|------|-------------|-------|
| **03H** | Read Holding Registers | Read consecutive holding registers | Data retrieval from inverters |
| **06H** | Write a WORD to Register | Write single register | Single parameter setting |
| **08H** | Loop Test | Diagnostic loopback test | Communication testing |
| **10H** | Write Several Data to Register | Write multiple registers | Complex data updates |

## Command & Control Registers (0x2500-0x25FF)

### 0x2500 - Operation Command Register
| Bit | Function | Values | Description |
|-----|----------|--------|-------------|
| 0 | Operation Command | 1=Run, 0=Stop | Basic motor control |
| 1 | Reverse Command | 1=Reverse, 0=Forward | Direction control |
| 2 | External Fault | 1=Fault, 0=Normal | External fault status |
| 3 | Fault Reset | 1=Reset, 0=Normal | Fault acknowledgment |
| 4 | Jog Command | 1=Jog, 0=Stop | Jogging operation |
| 5-9 | Multi-function Comm | 1=ON, 0=OFF | S1-S6 digital inputs |
| A | Inverter Mode | 1=ON | Inverter mode selection |
| B | Torque Comm by Comm | 1=ON | Communication torque control |

### 0x2502 - Frequency Command
- **Data Type**: WORD (16-bit unsigned)
- **Unit**: 0.01 Hz
- **Range**: 0 - 6000 (0 - 600.00 Hz)
- **Special Case**: If motor max frequency > 300Hz, resolution = 0.1Hz

### 0x2503 - Torque Command
- **Data Type**: WORD (16-bit signed)
- **Range**: -8192 to +8192
- **Scaling**: ±8192 = ±100% of rated torque
- **Application**: Torque control reference

### 0x2504 - Speed Limit
- **Data Type**: WORD (16-bit signed)
- **Range**: -120 to +120
- **Scaling**: ±120 = ±120% of nominal speed
- **Application**: Maximum speed limit setting

### 0x2505 - AO1 (Analog Output 1)
- **Type**: Analog Output
- **Voltage Range**: 0.00V - 10.00V
- **Current Range**: 0 - 1000 (4mA - 20mA mapping)
- **Application**: Process control output

### 0x2506 - AO2 (Analog Output 2)
- **Type**: Analog Output
- **Voltage Range**: 0.00V - 10.00V
- **Current Range**: 0 - 1000 (4mA - 20mA mapping)
- **Application**: Second process control output

### 0x2507 - DO (Digital Output)
- **Type**: Digital Output
- **Application**: Relay/pulse output control

### 0x250E-0x250F - G12-00 Registers
- **Type**: Complex number (High/Low word)
- **Application**: Industrial communication protocols (RS-485)

## Monitoring Registers (0x2520-0x252F)

| Register | Description | Data Type | Update Rate |
|----------|-------------|-----------|-------------|
| 0x2520 | Operation Status | WORD | Continuous |
| 0x2521 | Direction Status | WORD | Continuous |
| 0x2522 | Baseblock Reference | WORD | Continuous |
| 0x2523 | Frequency (Read-back) | WORD | 100ms |
| 0x2524 | Output Current | WORD | 100ms |
| 0x2525 | Output Voltage | WORD | 100ms |
| 0x2526 | Motor Temperature | WORD | 100ms |
| 0x2527 | Inverter Temperature | WORD | 100ms |
| 0x2528 | Fault Code | WORD | Event-based |
| 0x2529 | Warning Code | WORD | Event-based |
| 0x252A | Runtime Hours | WORD | 1 hour |
| 0x252B | Start-Stop Cycles | WORD | 1 hour |
| 0x252C | Energy Consumption | WORD | 1 hour |
| 0x252D | Power Factor | WORD | 100ms |
| 0x252E | Input Power | WORD | 100ms |
| 0x252F | Bus Voltage | WORD | 100ms |

## Parameter Groups

### Group 03 (03H) - Control Parameters

#### 0300H - Speed Control Mode
| Value | Description |
|-------|-------------|
| 0 | Common acceleration/deceleration |
| 1 | Individual acceleration/deceleration |
| 2-7 | Preset speed modes |

#### 0301H - Acceleration Time
- **Range**: 0 - 6000 (0.0 - 60.00 seconds)
- **Unit**: 0.01 seconds

#### 0302H - Deceleration Time
- **Range**: 0 - 6000 (0.0 - 60.00 seconds)
- **Unit**: 0.01 seconds

#### 0303H - Jerk Control
| Value | Description |
|-------|-------------|
| 0 | Normal jerk control |
| 1 | Low jerk control |
| 2 | No jerk control |

#### 0304H - Brake Time
- **Range**: 0 - 6000 (0.0 - 60.00 seconds)
- **Unit**: 0.01 seconds

#### 0305H - Slip Compensation
- **Range**: 0 - 100 (%)
- **Unit**: Percentage

#### 0306H - Torque Limit
- **Range**: 0 - 200 (%)
- **Unit**: Percentage
- **Application**: Maximum torque limit

#### 0307H - Voltage Limit
- **Range**: 0 - 150 (%)
- **Unit**: Percentage

#### 0308H - Current Limit
- **Range**: 0 - 200 (%)
- **Unit**: Percentage

#### 0309H - UV Protection (Under Voltage)
- **Range**: 90 - 150 (%)
- **Unit**: Percentage of rated voltage
- **Description**: Undervoltage protection threshold

#### 030AH - OV Protection (Over Voltage)
- **Range**: 100 - 200 (%)
- **Unit**: Percentage of rated voltage
- **Description**: Overvoltage protection threshold

#### 030BH - OC Protection (Over Current)
- **Range**: 150 - 300 (%)
- **Unit**: Percentage of rated current
- **Description**: Overcurrent protection threshold

### Group 04 (04H) - Analog Input Settings

#### 0400H - AI1 Signal Type
| Value | Description |
|-------|-------------|
| 0 | 0-10V, 0-20mA |
| 1 | 0-10V, 4-20mA |
| 2 | 2-10V, 0-20mA |
| 3 | 2-10V, 4-20mA |

#### 0401H - AI1 Gain
- **Range**: 0 - 1000
- **Default**: 100 (%)

#### 0402H - AI1 Bias
- **Range**: 0 - 100
- **Default**: 0 (%)

#### 0403H - AI1 Bias Selection
| Value | Description |
|-------|-------------|
| 0 | Positive bias |
| 1 | Negative bias |

#### 0404H - AI1 Slope
| Value | Description |
|-------|-------------|
| 0 | Positive slope |
| 1 | Negative slope |

#### Same configuration for AI2 (0405H - 0410H)

### Group 05 (05H) - Preset Frequencies

#### Preset Speed Configuration
| Register | Description |
|----------|-------------|
| 0500H | Preset Speed 0 (e.g., 0 Hz) |
| 0501H | Preset Speed 1 |
| 0502H | Preset Speed 2 |
| 0503H | Preset Speed 3 |
| 0504H | Preset Speed 4 |
| 0505H | Preset Speed 5 |
| 0506H | Preset Speed 6 |
| 0507H | Preset Speed 7 |
| 0508H | Preset Speed 8 |
| 0509H | Preset Speed 9 |

### Group 06 (06H) - PID Settings

#### 0600H - PID Enable
| Value | Description |
|-------|-------------|
| 0 | PID disabled |
| 1 | PID enabled |

#### 0601H - PID Reference
- **Range**: 0 - 6000 (0 - 600.00 Hz)
- **Application**: PID setpoint

#### 0602H - PID Proportional Gain
- **Range**: 0 - 1000
- **Unit**: Percentage

#### 0603H - PID Integral Gain
- **Range**: 0 - 1000
- **Unit**: Percentage

#### 0604H - PID Derivative Gain
- **Range**: 0 - 1000
- **Unit**: Percentage

#### 0605H - PID Integration Limit
- **Range**: 0 - 6000
- **Application**: Maximum integral term

#### 0606H - PID Differential Limit
- **Range**: 0 - 6000
- **Application**: Maximum differential term

### Group 07 (07H) - Communication Settings

#### 0700H - Baud Rate (bps)
| Value | Baud Rate |
|-------|-----------|
| 0 | 9600 |
| 1 | 19200 |
| 2 | 38400 |

#### 0701H - Data Bits
| Value | Bits |
|-------|------|
| 0 | 8 |
| 1 | 7 |

#### 0702H - Parity
| Value | Parity |
|-------|--------|
| 0 | None |
| 1 | Odd |
| 2 | Even |

#### 0703H - Stop Bits
| Value | Bits |
|-------|------|
| 0 | 1 |
| 1 | 2 |

#### 0704H - RTU/ASCII Mode
| Value | Mode |
|-------|------|
| 0 | RTU |
| 1 | ASCII |

#### 0705H - Station Address
- **Range**: 1 - 255
- **Application**: Modbus station identifier

### Group 08 (08H) - Digital Input Configuration

| Register | DI1 Function | DI2 Function | DI3 Function | DI4 Function | DI5 Function | DI6 Function | DI7 Function | DI8 Function |
|----------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| 0800H | Select | Select | Select | Select | Select | Select | Select | Select |
| 0801H | Select | Select | Select | Select | Select | Select | Select | Select |

### Groups 09-17 (09H-11H) - Advanced Parameters

These groups contain model-specific parameters including:
- Device-specific protection settings
- Advanced motor control parameters
- Communication optimization settings
- Diagnostic filter settings
- Temperature sensor calibration
- Maintenance interval settings

## Multi-Function Command Inputs

### Mapping Table
| Signal | Function | Register Bit | Description |
|--------|----------|--------------|-------------|
| S1 | Multi-function Input 1 | 06H | Operation command |
| S2 | Multi-function Input 2 | 07H | Reverse command |
| S3 | Multi-function Input 3 | 08H | External fault |
| S4 | Multi-function Input 4 | 09H | Fault reset |
| S5 | Multi-function Input 5 | 0AH | Reserved |
| S6 | Multi-function Input 6 | 0BH | Reserved |
| S7 | Multi-function Input 7 | 0CH | Multi-function Comm S1 |
| S8 | Multi-function Input 8 | 0DH | Multi-function Comm S2 |

## Communication Configuration (09H Group)

### 0900H - Communication Station Number
- **Range**: 1 - 32
- **Purpose**: Modbus network address

### 0901H - RTU/ASCII Selection
| Value | Mode |
|-------|------|
| 0 | RTU |
| 1 | ASCII |

### 0902H - Baud Rate (bps)
| Value | Rate |
|-------|------|
| 0 | 9600 |
| 1 | 19200 |
| 2 | 38400 |

### 0903H - Stop Bits
| Value | Bits |
|-------|------|
| 0 | 1 |
| 1 | 2 |

### 0904H - Parity
| Value | Parity |
|-------|--------|
| 0 | 8N1 (8 bits, No parity) |
| 1 | 7E1 (7 bits, Even parity) |
| 2 | 7O1 (7 bits, Odd parity) |

### 0905H - Data Format
| Value | Format |
|-------|--------|
| 0 | 8-bit data |
| 1 | 7-bit data |

## Analog Output Configuration

### AO1/AO2 Function Selection (04H Group)
| Register | Function | Description |
|----------|----------|-------------|
| 0400H | 0 | Output Frequency |
| 0401H | 1 | Frequency Command |
| 0402H | 2 | Output Voltage |
| 0403H | 3 | DC Bus Voltage |
| 0404H | 4 | Motor Current |
| 0405H | 5 | Torque Command |
| 0406H | 6 | Speed Limit |
| 0407H | 7 | Temperature Reference |

## Protection Settings

### UV Protection (Under Voltage - 0309H)
- **Default**: 90%
- **Range**: 80-120%
- **Function**: Prevents operation during undervoltage conditions

### OV Protection (Over Voltage - 030AH)
- **Default**: 110%
- **Range**: 100-150%
- **Function**: Protects inverter during overvoltage conditions

### OC Protection (Over Current - 030BH)
- **Default**: 150%
- **Range**: 125-400%
- **Function**: Protects motor during overcurrent conditions

## Diagnostic Registers (0x2800-0x29FF)

### Common Diagnostic Registers
| Register | Description | Data Type | Status |
|----------|-------------|-----------|--------|
| 0x2800 | Inverter Status | WORD | Continuous |
| 0x2801 | Communication Status | WORD | Continuous |
| 0x2802 | Temperature Status | WORD | Continuous |
| 0x2803 | Voltage Status | WORD | Continuous |
| 0x2804 | Current Status | WORD | Continuous |
| 0x2805 | Fault Code | WORD | Event-based |
| 0x2806 | Warning Code | WORD | Event-based |
| 0x2807 | Runtime Counter | WORD | 1 minute |
| 0x2808 | Start-Stop Counter | WORD | 1 minute |
| 0x2809 | Energy Meter | WORD | 1 minute |
| 0x28DA | Hardware Status | WORD | Event-based |
| 0x28DB | Software Version | WORD | Event-based |
| 0x28DC | Model Information | WORD | Event-based |

## Scale Factors and Conversions

### Data Type Conversions
| Parameter | Raw Value | Physical Value | Unit |
|-----------|-----------|----------------|------|
| Frequency | 1000 | 10 Hz | Hz |
| Voltage | 10 | 1.0 V | V |
| Current | 10 | 0.1 A | A |
| Torque | 327.68 | 1% | % |
| Temperature | 10 | 1 °C | °C |

### Special Conversions
- **Frequency Command**: Raw/100 = Hz (0.01 Hz resolution)
- **Torque Command**: Raw/327.68 = % (sign bit applies)
- **Temperature**: Raw/10 = °C
- **Analog Input**: Raw/1000 = V/1000 or mA

## Write Operations

### Function 06H - Single Register Write
**Format**: `: Slave Address Function Code Register Address High Register Address Low Data High Data Low CRC High CRC Low <CR> <LF>`

**Example - Set Frequency (0x2502, 3000)**:
`: 01 06 25 02 0B B8 49 EA <CR> <LF>`

### Function 10H - Multiple Register Write
**Format**: `: Slave Address Function Code Register Address High Register Address Low Register Count High Register Count Low Data... CRC High CRC Low <CR> <LF>`

**Example - Set Multiple Parameters**:
`: 01 10 25 00 0000 08 Data... CRC High CRC Low <CR> <LF>`

## Register Write Guidelines

### Safe Write Practices
1. **Always verify** current register values before modification
2. **Use Function 06H** for single critical register changes
3. **Use Function 10H** for multiple related parameter changes
4. **Monitor response** after each configuration change
5. **Implement retry logic** for failed write operations

### Write Precautions
1. **Reserved registers**: Never write to reserved/unused registers
2. **Bit protection**: Be aware of read-only bits in mixed registers
3. **Sequence matters**: Write related registers in logical sequence
4. **Verification**: Always read back after critical write operations

## Model-Specific Variations

### E510 vs. A510 Differences
| Aspect | E510 | A510 |
|--------|------|------|
| Multi-function Commands | Different S1-S8 mapping | Standard mapping |
| Parameter Groups | Additional groups 12-16 | Standard groups 03-11 |
| Protection Settings | Enhanced temperature | Basic protection |
| Monitoring Registers | More detailed | Standard monitoring |

### F510 Additional Features
- Extended parameter range (Groups 12-17)
- Enhanced diagnostic registers (0x2A00-0x2FFF)
- Advanced communication protocols
- Additional fault codes and warnings

## Error Handling

### Common Error Codes
| Code | Description | Action |
|------|-------------|--------|
| 01H | Illegal function | Check function code validity |
| 02H | Illegal data address | Verify register address |
| 03H | Illegal data value | Check parameter range |
| 04H | Slave device failure | Retry operation |
| 05H | Acknowledge | Continue operation |

### Communication Timeouts
- **RTU Timeout**: 1 second default
- **ASCII Timeout**: 3 seconds default
- **Retry Count**: 3 attempts
- **Backoff**: Exponential backoff on failures

## Configuration Examples

### Example 1: Configure Communication Parameters
1. Set station address to 10: `: 0A 06 07 05 0000 000A CD E5 <CR> <LF>`
2. Set baud rate to 19200: `: 01 06 07 00 0000 0001 8B 7C <CR> <LF>`
3. Set parity to even: `: 01 06 07 02 0000 0002 D1 A6 <CR> <LF>`

### Example 2: Set Preset Speeds
1. Define preset speeds: `: 01 10 25 05 0000 0009 0000 0064 0000 012C ... <CRC> <CR> <LF>`

### Example 3: Configure Analog Inputs
1. Set AI1 to 4-20mA: `: 01 06 04 00 0000 0001 B4 12 <CR> <LF>`
2. Set AI1 gain to 150: `: 01 06 04 01 0000 0096 1B 0E <CR> <LF>`

## Protocol Compliance

### RS-485 Specifications
- **Electrical**: EIA/TIA-232-F
- **Baud Rates**: Up to 38400 bps
- **Cable**: Shielded twisted pair, max 1200 meters
- **Termination**: 120 ohm at both ends
- **Handshake**: None (half-duplex)

### Timing Requirements
- **Inter-character**: 3.5 character times
- **Silence**: 3.5 character times
- **Response**: Within 1 second for RTU

This documentation provides comprehensive coverage of the Modbus protocol implementation for Teco Westinghouse inverters, enabling proper system integration and configuration.
