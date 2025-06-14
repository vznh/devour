import type React from "react";

// Base size configuration
type InputSize = "xs" | "sm" | "md" | "lg";

// Color variants for different states/themes
type InputVariant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";

// Visual style variants
type InputStyle = "filled" | "outlined" | "ghost" | "minimal";

// Icon positioning
type IconPosition = "left" | "right";

// Validation states
type ValidationState = "valid" | "invalid" | "warning" | "neutral";

// Icon types
type IconComponent = React.ComponentType<{ className?: string }>;
type IconFunction = (props: { className?: string }) => React.ReactNode;
type IconNode = React.ReactNode;
type IconType = IconComponent | IconFunction | IconNode;

// Size configuration
interface SizeConfiguration {
  text: string;
  height: string;
  padding: string;
  iconSize: string;
  fontSize?: string;
}

// Color configuration
interface ColorConfiguration {
  primary?: string;
  secondary?: string;
  success?: string;
  error?: string;
  warning?: string;
  info?: string;
  neutral?: string;
  background?: string;
  border?: string;
  text?: string;
  placeholder?: string;
  disabled?: string;
}

// Style configuration
interface StyleConfig {
  background?: string;
  border?: string;
  borderRadius?: string;
  shadow?: string;
  focusRing?: string;
}

// Complete theme configuration
interface ThemeConfig {
  colors?: ColorConfiguration;
  styles?: Record<InputStyle, StyleConfig>;
  sizes?: Record<InputSize, SizeConfiguration>;
}

// Validation configuration
interface ValidationConfiguration {
  showValidationColors?: boolean;

  /* Duration for red flash, in milliseconds */
  validationColorDuration?: number;

  warningColor?: string;
  errorColor?: string;
  successColor?: string;
}

// Animation configuration
interface AnimationConfiguration {
  duration?: number;
  easing?: string;
  disabled?: boolean;
}

// Main component props
interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onSubmit"
  > {
  // Core functionality
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
  submitCondition?: (value: string) => boolean;

  // Validation
  validationState?: ValidationState;
  validation?: ValidationConfiguration;

  // Appearance
  size?: InputSize;
  variant?: InputVariant;
  variantStyle?: InputStyle;

  // Icon system
  icon?: IconType;
  iconPosition?: IconPosition;
  showDefaultIcon?: boolean;

  // Theming & customization
  colors?: ColorConfiguration;
  theme?: ThemeConfig;
  animation?: AnimationConfiguration;

  // Advanced customization
  customStyles?: {
    container?: React.CSSProperties
    input?: React.CSSProperties
    icon?: React.CSSProperties
    underline?: React.CSSProperties
  }

  // States
  disabled?: boolean;
  loading?: boolean;

  // Styling
  className?: string;
  containerClassname?: string;
  iconClassname?: string;

  // Accessibility
  label?: string;        // aria-label
  describedBy?: string;  // aria-describedBy

  // Event handlers
  onIconClick?: () => void;
  onValidationChange?: (state: ValidationState) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

// Icon wrapper/container props
interface IconContainerProps {
  icon: IconType;
  size: InputSize;
  position: IconPosition;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

// Internal state interface
interface InputState {
  value: string;
  isFocused: boolean;
  validationState: ValidationState;
  isValidationFlashing: boolean;
}

// Context type for theme context, if we need to
interface InputThemeContext {
  theme?: ThemeConfig
  defaultVariant?: InputVariant
  defaultSize?: InputSize
  defaultStyle?: InputStyle
}

interface InputReference {
  focus: () => void
  blur: () => void
  select: () => void
  getValue: () => string
  setValue: (value: string) => void
  validate: () => boolean
  getInputElement: () => HTMLInputElement | null
}

export type {
  InputProps,
  InputSize,
  InputVariant,
  InputStyle,
  IconPosition,
  ValidationState,
  IconType,
  IconComponent,
  IconFunction,
  IconNode,
  SizeConfiguration,
  ColorConfiguration,
  StyleConfig,
  ThemeConfig,
  ValidationConfiguration,
  AnimationConfiguration,
  IconContainerProps,
  InputState,
  InputThemeContext,
  InputReference
}
