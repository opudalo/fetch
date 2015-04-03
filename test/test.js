import 'babel/polyfill'
import fetch from '../src/index'
import {expect} from 'chai'

describe('fetch basics', function () {
  it('should exist', function () {
    expect(typeof fetch).to.equal('function')
  })
})
