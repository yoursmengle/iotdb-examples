/*
 *  David Janes
 *  IOTDB
 *  2014-11-21
 */

"use strict";

var iotdb = require('iotdb');

var iot = iotdb.iot();

iot.connect()
    .with_model("TCPConnectedLight")
    .set(':on', false)
