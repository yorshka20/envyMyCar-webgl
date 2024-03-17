import { useEffect, useRef } from 'react';
import './App.css';
import { render } from './render';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    let canvas = canvasRef.current;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.width = 500 * 2;
      canvas.height = 500 * 2;

      canvas.setAttribute('id', 'canvas');
      canvas.setAttribute('class', 'canvas-container');
      canvasRef.current = canvas;
    }

    document.getElementById('root')?.appendChild(canvas);

    render(canvas);
  }, []);

  return <></>;
}

export default App;
