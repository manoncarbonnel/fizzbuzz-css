import { describe, expect, it } from 'vitest';
import { Window } from 'happy-dom';

const fizzBuzz = (input) =>
  input % 15 === 0
    ? 'FizzBuzz'
    : input % 5 === 0
    ? 'Buzz'
    : input % 3 === 0
    ? 'Fizz'
    : input + '';

const baseHtmlFixture = () => {
  const window = new Window();
  const document = window.document;

  document.body.innerHTML = '<main></main>';

  const manyDiv = Array(30)
    .fill(null)
    .map((_) => document.createElement('div'))
    .map((element, index) => {
      element.innerHTML = fizzBuzz(index + 1);
      return element;
    });

  manyDiv.forEach((element) => document.body.firstChild.appendChild(element));

  return document;
};

/********************************************************************************/

describe('Mounted', () => {
  it('should be mounted with base HTML', () => {
    const document = baseHtmlFixture();
    expect(document.querySelector('main')).toBeTruthy();
    console.log(document.body.innerHTML);
  });
});

describe('FizzBuzz', () => {
  it('should be 1', () => {
    const document = baseHtmlFixture();

    expect(document.querySelector('div').textContent).toEqual('1');
  });

  it('should be 2', () => {
    const document = baseHtmlFixture();

    expect(document.querySelector('div:nth-child(2)').textContent).toEqual('2');
  });

  it('fizz', () => {
    const document = baseHtmlFixture();

    expect(document.querySelector('div:nth-child(3)').textContent).toEqual(
      'Fizz'
    );
  });
});
