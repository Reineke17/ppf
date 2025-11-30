(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbole2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(-315.8461,-133.0901);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(-299.14,-101.22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(-295.1893,-77.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(-285.0548,-82.0166);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(-317.8506,-106.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-405,-193.1,186.6,162.7);


(lib.Symbole1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A0TnzMAonAAAIAAPnMgonAAAg");
	this.shape.setTransform(130,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A0TH0IAAvnMAonAAAIAAPng");
	this.shape_1.setTransform(130,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(-1,-1,262,102), null);


// stage content:
(lib.escape_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		
		// Cacher le texte au départ
		root.txt_1.visible = false;
		
		// Activer le tactile (pour mobile)
		createjs.Touch.enable(stage);
		
		// Lorsque l'utilisateur clique ou tape le bouton
		root.btn_1.on("click", function() {
		    root.txt_1.visible = true;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_2
	this.txt_1 = new cjs.Text("Truc", "62px 'Arial'");
	this.txt_1.name = "txt_1";
	this.txt_1.textAlign = "center";
	this.txt_1.lineHeight = 71;
	this.txt_1.lineWidth = 364;
	this.txt_1.parent = this;
	this.txt_1.setTransform(550,185.35);

	this.timeline.addTween(cjs.Tween.get(this.txt_1).wait(1));

	// Calque_1
	this.btn_1 = new lib.Symbole1();
	this.btn_1.name = "btn_1";
	this.btn_1.setTransform(179.75,253.35,1,1,0,0,0,130,50);

	this.timeline.addTween(cjs.Tween.get(this.btn_1).wait(1));

	// Calque_1
	this.instance = new lib.Symbole2();
	this.instance.setTransform(159.7,100.6,1,1,0,0,0,-315.9,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(449.3,215.6,284.8,88.29999999999998);
// library properties:
lib.properties = {
	id: 'A6BA47766863407C87B22BA7EB2B6435',
	width: 800,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A6BA47766863407C87B22BA7EB2B6435'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;