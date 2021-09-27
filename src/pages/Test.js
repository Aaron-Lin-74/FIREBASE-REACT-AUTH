import React, { useEffect } from 'react'
import Login from '../components/Login'
import {
  Route,
  Switch,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'

const Test = () => {
  //console.log(useParams())
  const { id } = useParams()
  // console.log(useLocation())
  const query = new URLSearchParams(useLocation().search)
  // console.log(query.get('name'))

  // useHistory is more flexible than the <Redirect to='/' />
  const history = useHistory()

  // useRouteMatch is used for nested route
  const { url, path } = useRouteMatch()

  useEffect(() => {
    if (query.get('name') === 'aaron') {
      // history.push('/')
    }
  }, [])
  return (
    <>
      <h1>Testing page</h1>
      <h2>ID is = {id}</h2>
      <h2>{query.get('name')}</h2>
      <ul>
        <li>
          <Link to={`${url}/login`}>View</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/login`} component={Login} />
      </Switch>
    </>
  )
}

// we can either use match or useParams to access params
// const Test = ({ match }) => {
//   return (
//     <div>
//       <h2>ID is = {match.params.id}</h2>
//     </div>
//   )
// }

export default Test
