import React from 'react'

function Navigation({onROuteChange}) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <button onClick={() =>  onROuteChange('signin')} className="f3  br3 dim px3 black">
              Sign Out
      </button>
    </nav>
  )
}
export default Navigation