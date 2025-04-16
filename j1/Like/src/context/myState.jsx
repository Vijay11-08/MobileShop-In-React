
import MyContext from './myContext';

function MyState({children}) {
    const name = "jay"
  return (
    <MyContext.Provider value={name}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState