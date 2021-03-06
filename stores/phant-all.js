/*
 *  phant-all.js
 *
 *  David Janes
 *  IOTDB
 *  2014-09-13
 *  "In 1848, Phineas Gage was spiked in the head"
 *
 *  Upload _all_ sensor events to Phant AKA data.sparkfun.com
 *  Please see README.md
 */

"use strict"

var iotdb = require('iotdb')
var iot = iotdb.iot()

iot.store('phant').track(
    iot.connect()
)
