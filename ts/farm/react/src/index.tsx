import { createRoot } from 'react-dom/client';
import { Main } from './main';
import './index.css'
// oxide:top-imports

const container = document.querySelector('#root') as Element;
const root = createRoot(container);

root.render(<Main />);
