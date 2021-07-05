import React,{useState,useEffect} from 'react'
import Panel from './component/singuppanel'
import Login from './component/loginpanel'
import './App.css';

function App() {
  const [option, setOption] = useState(0);
  const [userInfo, setuserInfo] = useState([]);
  const [err, seterr] = useState("");

useEffect(() => {
  var queriesFromStorage = [JSON.parse(localStorage.getItem("1234567889"))];
  setuserInfo(queriesFromStorage)
}, [])

  const optionFn=()=>{
    setOption(1)
  }
  const optionFn1=()=>{
    setOption(0)
  }

  const reg=(useData)=>{
    if(useData.status=="User created")
    setTimeout(() => {
      optionFn1()
    }, 5000);
  }
  return (
    <div className="App">
      <div className=''>
			<header>
				<div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				
        <span className={option==1 && 'active'} onClick={optionFn}>Create an account</span>
        	<span className={option ==0 &&  'active'} onClick={optionFn1}>Sign in to your account</span>
				
				</div>
			</header>
      <div id='panel'>

      {option ==1?(<Panel reg={reg} />):(<Login />)}
      </div>
		    

		</div>
    </div>
  );
}

export default App;
