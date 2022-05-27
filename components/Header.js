import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span> Next js</span> News
        </h1>
        <p className={headerStyles.description}>Keep up yo!</p>
    </div>
  )
}

export default Header

// conditional styling in jsx
    // const x = 9
    // <style jsx>
    //     {`
    //     .title {
    //         color: ${ x > 2 ? 'blue' : 'red' };
    //     }
    //     `}
    // </style>