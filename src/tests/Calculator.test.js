import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add', () => {
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('8');
  })

  it('should be able to subtract', () => {
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('0');

  })

  it('should be able to multiply', () => {
    const button4 = container.find('#number4');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonMultiply.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('16');
  })

  it('should be able to divide', () => {
    const button4 = container.find('#number4');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonDivide.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('1');
  })

  it('should be able to concatinate number clicks', () => {
    const button4 = container.find('#number4');
    button4.simulate('click');
    button4.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('44');
  })

  it('should be able to chain operators', () => {
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click')
    buttonMultiply.simulate('click')
    button4.simulate('click')
    buttonSubtract.simulate('click')
    button4.simulate('click')
    buttonEquals.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('12');
  })

  it('should be able to click clear without affecting the calculation', () => {
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const buttonClear = container.find('#clear');
    button4.simulate('click');
    buttonSubtract.simulate('click')
    button4.simulate('click');
    buttonClear.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('4');

  })



})
