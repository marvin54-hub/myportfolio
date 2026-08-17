import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  resetData = () => {
    try {
      localStorage.clear()
    } catch {}
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#0b1220',
          color: '#f1f4f9',
          fontFamily: "'Outfit', sans-serif",
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '24px', marginBottom: '12px', color: '#ef4444' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#b6c0d1', maxWidth: '500px', marginBottom: '24px', fontSize: '14px' }}>
            An unexpected error occurred. You can reset local saved data to restore the app defaults.
          </p>
          <pre style={{
            background: '#182238',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '12px',
            maxWidth: '600px',
            overflowX: 'auto',
            marginBottom: '24px',
            color: '#f87171'
          }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={this.resetData}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: '#2563eb',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Reset local data & Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
