import { useEffect } from 'react';

const NotFound = function(props) {
  useEffect(() => {
    console.log(props.location)
  }, [props.location])
  return null
}

export default NotFound