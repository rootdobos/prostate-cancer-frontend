export interface ImageGridData {
  columnCount: number;
  rowCount: number;
  minX: number;
  minY: number;
  images: { path: string; x: number; y: number }[];
}
