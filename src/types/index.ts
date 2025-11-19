export interface NodeType {
  id: string;
  title: string;
  subtitle?: string;
  initialPosition?: {
    x: number;
    y: number;
  };
  errors: string[];
  showErrors: boolean;
  warnings: string[];
  showWarnings: boolean;
  loading: boolean;
  success: boolean;
  settings: {
    alwaysOutputData: boolean;
    executeOnce: boolean;
    retryOnFail: boolean;
  };
}

export interface IconProps {
  index: number;
}
