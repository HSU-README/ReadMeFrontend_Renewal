import React from 'react';

export interface ICanvasData {
  id?: string;
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  chart?: { col: number; row: number; tableContent: any };
  chartContent?: string;
  content?: string;
  type: string;
}

export interface ICanvasComponent {
  position?: { top: number; left: number };
  dimension?: { width: string; height: string };
  chart?: { col: number; row: number; tableContent: any };
  chartContent?: string;
  content?: string;
  id?: string;
  type: string;
  isReadOnly?: boolean;
}

export interface ICanvasContext {
  state?: {
    canvasData: ICanvasData[];
    activeSelection: Set<string>;
    enableQuillToolbar: boolean;
  };
  actions?: {
    setCanvasData: React.Dispatch<React.SetStateAction<ICanvasData[]>>;
    setActiveSelection: React.Dispatch<React.SetStateAction<Set<string>>>;
    updateCanvasData: (data: Partial<ICanvasComponent>) => void;
    addElement: (type: string) => void;
    setEnableQuillToolbar: (state: boolean) => void;
  };
}
