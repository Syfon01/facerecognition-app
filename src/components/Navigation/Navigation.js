import React from 'react'

function Navigation({ onROuteChange, isSignIn }) {
  if (isSignIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={() =>  onROuteChange('signout')} className="f3  br3 dim px3 black">
                Sign Out
        </button>
      </nav>
    )    
  }
  else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={() =>  onROuteChange('signin')} className="f3  br3 dim px3 mx2 black">
                Login
        </button>
        <button onClick={() =>  onROuteChange('register')} className="f3  br3 dim px3 mx2 black">
                Register
        </button>
      </nav>
    )
  }
}
export default Navigation