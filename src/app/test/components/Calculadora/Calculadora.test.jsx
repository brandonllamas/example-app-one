
import React from "react";
import { mount } from "enzyme";
import Calculadora from './../../../components/Calculadora/calculadora';

describe("calculadora Testing",()=>{
    let wrapper;
    beforeEach(() => {
      wrapper =  mount(<Calculadora/>)
    });
  
  
    test("Validar Ingreso de variables",()=>{
        const TextoFinal = "(2*3)/123";
        wrapper.find("#btn-parenteAbr").simulate("click");
        wrapper.find("#btn-2").simulate("click");
        wrapper.find("#btn-x").simulate("click");
        wrapper.find("#btn-3").simulate("click");
        wrapper.find("#btn-parenteCerr").simulate("click");
        wrapper.find("#btn-div").simulate("click");
        wrapper.find("#btn-1").simulate("click");
        wrapper.find("#btn-2").simulate("click");
        wrapper.find("#btn-3").simulate("click");
       expect(wrapper.find("#result").text()).toBe(TextoFinal);
    });
  
  })