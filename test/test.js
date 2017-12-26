var fs = require('fs');
var path = require('path');
var chai = require('chai');
const expect = chai.expect;
var app = require('../lib/anychart-node');

describe('Exporting', function() {
  describe('exportTo', function() {
    describe('Second param as string (output type) | to pdf', function() {
      var outputType = 'pdf';

      it('check promise', function(done) {
        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";

        app.exportTo(data, outputType).then(function(image) {
          expect(image).to.be.instanceof(Buffer);

          done();
        }, function(err) {
          console.log(err);
        });
      });

      it('javascript -> pdf', function(done) {
        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.labels(false).legend(false).title(false); chart.container('container').draw();});";

        app.exportTo(data, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('xml -> pdf', function(done) {
        var data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';

        app.exportTo(data, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('json -> pdf', function(done) {
        var data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';

        app.exportTo(data, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('object -> pdf', function(done) {
        var doc = require('jsdom').jsdom();
        var anychart = require('anychart')(doc.defaultView);

        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container('container').draw();

        app.exportTo(chart, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

    });

    describe('Second param as string (output type) | to png', function() {
      var outputType = 'png';

      it('check promise', function(done) {
        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";

        app.exportTo(data, outputType).then(function(image) {
          expect(image).to.be.instanceof(Buffer);

          done();
        }, function(err) {
          console.log(err);
        });
      });

      it('javascript -> pdf', function(done) {
        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.labels(false).legend(false).title(false); chart.container('container').draw();});";

        app.exportTo(data, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('xml -> pdf', function(done) {
        var data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';

        app.exportTo(data, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('json -> pdf', function(done) {
        var data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';

        app.exportTo(data, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('object -> pdf', function(done) {
        var doc = require('jsdom').jsdom();
        var anychart = require('anychart')(doc.defaultView);

        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container('container').draw();

        app.exportTo(chart, outputType, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

    });

    describe('Second param as object | to png', function() {
      it('check promise', function(done) {
        var params = {
          outputType: 'png'
        };

        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";

        app.exportTo(data, params).then(function(image) {
          expect(image).to.be.instanceof(Buffer);

          done();
        }, function(err) {
          console.log(err);
        });
      });

      it('javascript -> png', function(done) {
        var params = {
          outputType: 'png'
        };

        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, params, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('xml -> png', function(done) {
        var params = {
          outputType: 'png'
        };

        var data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, params, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('json -> png', function(done) {
        var params = {
          outputType: 'png'
        };

        var data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, params, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('chart -> png | without defined document', function(done) {
        var params = {
          outputType: 'png'
        };

        var doc = require('jsdom').jsdom();
        var anychart = require('anychart')(doc.defaultView);

        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container('container').draw();

        app.exportTo(chart, params, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('chart -> png | with defined document', function(done) {
        var params = {
          outputType: 'png'
        };

        var doc = require('jsdom').jsdom();
        var anychart = require('anychart')(doc.defaultView);

        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container('container').draw();

        params.containerId = 'container';
        params.document = doc;

        app.exportTo(chart, params, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('stage -> png | without defined document', function(done) {
        var params = {
          outputType: 'png'
        };

        var doc = require('jsdom').jsdom();
        var anychart = require('anychart')(doc.defaultView);

        app.anychartify(doc);

        var stage = anychart.graphics.create('container');
        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container(stage).draw();

        app.exportTo(stage, params, function(err, image) {
          expect(image).to.be.null;
          expect(err).to.be.instanceOf(Error);

          done();
        });
      });

      it('stage -> png | with defined document', function(done) {
        var params = {
          outputType: 'png'
        };

        var doc = require('jsdom').jsdom('<div id="container"></div>');
        var anychart = require('anychart')(doc.defaultView);

        app.anychartify(doc);

        var stage = anychart.graphics.create('container');
        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container(stage).draw();

        params.containerId = 'container';
        params.document = doc;

        app.exportTo(stage, params, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });
    });

    describe('Second param as undefined | default - jpg', function() {
      it('check promise', function(done) {
        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";

        app.exportTo(data).then(function(image) {
          expect(image).to.be.instanceof(Buffer);

          done();
        }, function(err) {
          console.log(err);
        });
      });

      it('javascript', function(done) {
        var data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";

        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('xml', function(done) {
        var data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';

        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('json', function(done) {
        var data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';

        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });

      it('chart', function(done) {
        var doc = require('jsdom').jsdom();
        var anychart = require('anychart')(doc.defaultView);

        var chart = anychart.pie([10, 20, 8, 5, 12, 9]);
        chart.container('container').draw();

        app.exportTo(chart, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          done();
        });
      });


    });

    describe('parallels', function() {
      it('mix', function(done) {
        this.timeout(10000);

        var data;

        var i = 0;
        var exit = function() {
          i++;
          if (i === 17)
            done();
        };

        data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(1);

          exit();
        });

        data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, 'pdf', function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(2);

          exit();
        });

        data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, {outputType: 'png'}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(3);

          exit();
        });

        data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(4);

          exit();
        });

        data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, 'pdf', function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(5);

          exit();
        });

        data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, {outputType: 'png'}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;
        });

        data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(6);

          exit();
        });

        data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, 'pdf', function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;


          console.log(7);

          exit();
        });

        data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, {outputType: 'png'}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(8);

          exit();
        });

        data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(9);

          exit();
        });

        data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, 'pdf', function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;


          console.log(10);

          exit();
        });

        data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, {outputType: 'png'}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;


          console.log(11);

          exit();
        });

        data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(12);

          exit();
        });

        data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, 'pdf', function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(13);

          exit();
        });

        data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, {outputType: 'png'}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(14);

          exit();
        });

        data = '{"chart":{"enabled":true,"credits":{"enabled":false},"type":"pie","data":[10,20,8,5,12,9],"normal":{"labels":{"enabled":true,"disablePointerEvents":true}}}}';
        app.exportTo(data, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;


          console.log(15);

          exit();
        });

        data = '<anychart xmlns="http://anychart.com/schemas/8.1.0/xml-schema.xsd"><chart enabled="true" type="pie"><credits enabled="false"/><data><point><![CDATA[10]]></point><point><![CDATA[20]]></point><point><![CDATA[8]]></point><point><![CDATA[5]]></point><point><![CDATA[12]]></point><point><![CDATA[9]]></point></data><normal><labels enabled="true" disable_pointer_events="true"/></normal></chart></anychart>';
        app.exportTo(data, 'pdf', function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(16);

          exit();
        });

        data = "anychart.onDocumentReady(function() {var chart = anychart.pie([10, 20, 8, 5, 12, 9]); chart.container('container').draw();});";
        app.exportTo(data, {outputType: 'png'}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          console.log(17);

          exit();
        });
      });

      it('dif containers', function(done) {
        this.timeout(10000);

        var data;

        var i = 0;
        var exit = function(index, data) {
          var pathToImg = './test/img/'+ index + '.png';
          var dirName = path.dirname(pathToImg);
          if (!fs.existsSync(dirName))
            fs.mkdirSync(dirName);

          fs.writeFile(pathToImg, data, function(fsWriteError) {
            if (fsWriteError)
              console.log(fsWriteError);
          });
          console.log(index);

          i++;
          if (i === 10)
            done();
        };

        data = '{"chart":{"type":"pie","data":[1], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 1}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 1;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[2], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 2}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 2;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[3], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 3}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 3;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[4], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 4}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 4;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[5], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 5}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 5;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[6], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 6}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 6;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[7], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 7}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 7;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[8], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 8}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 8;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[9], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 9}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 9;
          exit(index, image);
        });

        data = '{"chart":{"type":"pie","data":[10], "labels":{"format":"{%value}"}}}';
        app.exportTo(data, {outputType: 'png', containerId: 'container' + 10}, function(err, image) {
          expect(image).to.be.instanceof(Buffer);
          expect(err).to.be.null;

          var index = 10;
          exit(index, image);
        });
      });
    });
  })
});