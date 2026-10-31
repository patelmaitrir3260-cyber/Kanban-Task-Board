import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyshopeProvider } from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
<MyshopeProvider><App /></MyshopeProvider>
)
