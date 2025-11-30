(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PPF_achat_atlas_1", frames: [[0,0,409,616]]}
];


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



(lib.CachedBmp_10 = function() {
	this.initialize(ss["PPF_achat_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsfldIY/AAIAAK7I4/AAg");
	this.shape.setTransform(80,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsfFeIAAq7IY/AAIAAK7g");
	this.shape_1.setTransform(80,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(-1,-1,162,72), null);


(lib.JEU1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
		var stage = this.stage;
		
		// Active le tactile (smartphone / tablette)
		createjs.Touch.enable(stage, true, false);
		
		// Taille de la scène (celle du document Animate)
		var W = stage.canvas.width;
		var H = stage.canvas.height;
		
		// ---------- (OPTIONNEL) FOND DE TEST ----------
		// Si tu veux tester sans ton décor, décommente ça :
		// var bg = new createjs.Shape();
		// bg.graphics.beginFill("#66CCFF").drawRect(0, 0, W, H);
		// root.addChild(bg);
		// ---------------------------------------------
		
		// ---------- 1) COUCHE GRIS CLAIR À GRATTER ----------
		var overlay = new createjs.Shape();
		overlay.graphics.beginFill("#BBBBBB").drawRect(0, 0, W, H);
		root.addChild(overlay);
		
		// Mettre la couche en cache pour pouvoir "effacer"
		overlay.cache(0, 0, W, H);
		
		// ---------- 2) LOGIQUE "LAVE-VITRE" ----------
		var isScratching = false;
		var lastX = 0;
		var lastY = 0;
		var brushSize = 60; // taille du "pinceau"
		
		// Quand on pose le doigt / clique sur la couche
		overlay.on("mousedown", function (evt) {
		    isScratching = true;
		
		    // Convertit la position globale (stage) en locale (overlay)
		    var pt = overlay.globalToLocal(evt.stageX, evt.stageY);
		    lastX = pt.x;
		    lastY = pt.y;
		});
		
		// Quand on bouge le doigt / la souris (événement touch-friendly)
		overlay.on("pressmove", function (evt) {
		    if (!isScratching) return;
		
		    // Position locale du doigt / de la souris
		    var pt = overlay.globalToLocal(evt.stageX, evt.stageY);
		    var x = pt.x;
		    var y = pt.y;
		
		    // Dessine un trait qui servira de "gomme"
		    overlay.graphics.clear();
		    overlay.graphics
		        .setStrokeStyle(brushSize, "round", "round")
		        .beginStroke("rgba(0,0,0,1)")
		        .moveTo(lastX, lastY)
		        .lineTo(x, y);
		
		    // Applique ce trait sur le cache en mode effacement
		    overlay.updateCache("destination-out");
		
		    lastX = x;
		    lastY = y;
		
		    // On force un rafraîchissement (en plus du Ticker, pour être safe)
		    stage.update();
		});
		
		// Quand on relève le doigt / le bouton
		overlay.on("pressup", function () {
		    isScratching = false;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_2
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(28.6,68.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.JEU1, new cjs.Rectangle(28.6,68.3,204.5,308), null);


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
		
		// Empêche le bouton de capturer les events du fond
		root.btn_1.mouseEnabled = true;
		
		// Quand on clique sur le bouton
		root.btn_1.on("click", function() {
		    root.parent.nextGame();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_1
	this.btn_1 = new lib.Symbole2();
	this.btn_1.name = "btn_1";
	this.btn_1.setTransform(80,35,1,1,0,0,0,80,35);

	this.timeline.addTween(cjs.Tween.get(this.btn_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(-0.5,-0.5,161,71), null);


// stage content:
(lib.PPF_achat = function(mode,startPosition,loop,reversed) {
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
		// Dans la frame 1 de la scène principale
		var root = this;
		
		// On commence sur le mini-jeu 1
		root.jeu_0.visible = true;
		root.jeu_1.visible = false;
		
		root.nextGame = function() {
		
		    // Jeu 1 terminé → on affiche Jeu 2
		    if (root.jeu_0.visible) {
		        root.jeu_0.visible = false;
		        root.jeu_1.visible = true;
		        return;
		    }
		
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_2
	this.jeu_0 = new lib.Symbole1();
	this.jeu_0.name = "jeu_0";
	this.jeu_0.setTransform(140,275,1,1,0,0,0,80,35);

	this.timeline.addTween(cjs.Tween.get(this.jeu_0).wait(1));

	// Calque_1
	this.jeu_1 = new lib.JEU1();
	this.jeu_1.name = "jeu_1";
	this.jeu_1.setTransform(17.2,21,1,1,0,0,0,17.2,21);

	this.timeline.addTween(cjs.Tween.get(this.jeu_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(163.6,278.3,69.5,98);
// library properties:
lib.properties = {
	id: '8DE6283DA06940BCA57631E77359B294',
	width: 270,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/PPF_achat_atlas_1.png?1764511351697", id:"PPF_achat_atlas_1"}
	],
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
an.compositions['8DE6283DA06940BCA57631E77359B294'] = {
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