import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { searchInfo } from './content/searchInfo'

export function prerender() {
  return { html: renderToString(<StrictMode><App /></StrictMode>), ...searchInfo }
}
