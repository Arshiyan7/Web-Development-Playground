// import Header from './component/MiniProjectTwo/Header'
// import About from './component/MiniProjectTwo/About'
// import Practice from './component/practice'
import luna from './component/MiniProjectThree/photos/Luna.jpg'
import Happy from './component/MiniProjectThree/photos/Happy.webp'
import Contacts from './component/MiniProjectThree/contacts'

export default function App(){
  return(
    <div className="contacts">
      <Contacts
      img={luna}
      name='Luna'
      phone='0300-PAW-LUNA'
      email='luna.purrfect@gmail.com'
      />
      <Contacts
      img={Happy}
      name='Happy'
      phone='0300-MEOW-HAPPY'
      email='happy.pawsome@gmail.com'
      />
    </div>
    // <>
    // {/* <Header/>
    // <About/> */}
    // <Practice/>
    // </>
  )
}