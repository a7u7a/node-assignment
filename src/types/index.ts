export interface Node {
  id: string;
  title: string;
  subtitle?: string;
  initialPosition?: {
    x: number;
    y: number;
  };
  errors?: string[];
  warnings?: string[];
  loading?: boolean;
  success?: boolean;
  settings?: {
    alwaysOutputData?: boolean;
    executeOnce?: boolean;
    retryOnFail?: boolean;
  };
}
