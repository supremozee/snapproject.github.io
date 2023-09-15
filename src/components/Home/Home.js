import React, { useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import Authcontext from '../../Store/Auth-context';

const Home = (props) => {
const Authctx = useContext(Authcontext)
  return (
    <>
     <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={Authctx.onLogout}>Logout</Button>
    </Card>
    </>
   
  );
};

export default Home;
