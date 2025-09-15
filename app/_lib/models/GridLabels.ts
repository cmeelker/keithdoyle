export interface GridLabels {
  top: string;
  bottom: string;
  left: string;
  right: string;
}

export function mapGridLabels(labels: any): GridLabels {
  return {
    top: labels.fields.top,
    bottom: labels.fields.bottom,
    left: labels.fields.left,
    right: labels.fields.right,
  };
}
