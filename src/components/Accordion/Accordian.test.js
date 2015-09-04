import React from 'react/addons';
import assert from 'assert';
import Accordion from './Accordion';

describe('Accordion', () => {

  const renderer = React.addons.TestUtils.createRenderer();
  const testData = {
    summary: 'This is a summary',
    details: 'This is some details'
  };

  function renderAccordion() {
    renderer.render(<Accordion summary={testData.summary} details={testData.details} />);
    return renderer.getRenderOutput();
  }

  let result = renderAccordion();

  it('should render the correct element type', () => {
    assert.equal(result.type, 'div');
  });

  it('should be inactive by default', () => {
    console.log('---------------------------------');
    console.log(result.props.children);
    console.log('---------------------------------');
    assert.deepEqual(result.props.children, [
      <a onClick={Accordion.toggle}>This is a summary</a>,
      <p style={{display: 'none'}}>This is some details</p>
    ]);
  });

  it('should become active when clicked', () => {
    result.props.onClick();
    result = renderAccordion();
    console.log('---------------------------------');
    console.log(result.props.children);
    console.log('---------------------------------');
    assert.deepEqual(result.props.children, [
      <a onClick={Accordion.toggle}>This is a summary</a>,
      <p style={{display: 'inherit'}}>This is some details</p>
    ]);
  });
});
