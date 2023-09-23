// фтраница аутентификации
import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import {Label, TextInput, Checkbox,Button} from "flowbite-react";
import axios from 'axios';


function Auth() {


  return (
        
    <div>
       <form method="post" className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
              />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              type="email"
              name="email"
              

            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Your password"
              />
            </div>
            <TextInput
              id="password1"
              required
              type="password"
              name="password"

            />
          </div>
          
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
        
      
       
  

    );
};

export default Auth;
