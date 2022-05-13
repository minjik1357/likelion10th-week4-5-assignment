function Wrapper(props) {
  const style = {
    border: '2px solid black',
    padding: '16px',
    margin: '5%',
  };

  return (
    <div style={style}>
			{props.children}
    </div>
  )
}

export default Wrapper;