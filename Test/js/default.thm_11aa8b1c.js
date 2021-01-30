
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/battle/BattleSkin.exml'] = window.BattleSkin = (function (_super) {
	__extends(BattleSkin, _super);
	function BattleSkin() {
		_super.call(this);
		this.skinParts = ["groupBg","groupUnit","groupBullet","groupCar"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.groupBg_i(),this.groupUnit_i(),this.groupBullet_i(),this.groupCar_i()];
	}
	var _proto = BattleSkin.prototype;

	_proto.groupBg_i = function () {
		var t = new eui.Group();
		this.groupBg = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.groupUnit_i = function () {
		var t = new eui.Group();
		this.groupUnit = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.groupBullet_i = function () {
		var t = new eui.Group();
		this.groupBullet = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.groupCar_i = function () {
		var t = new eui.Group();
		this.groupCar = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return BattleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/UnitSkin.exml'] = window.UnitSkin = (function (_super) {
	__extends(UnitSkin, _super);
	function UnitSkin() {
		_super.call(this);
		this.skinParts = ["imgCar","imgUnit","imgHp","pGroup"];
		
		this.elementsContent = [this.pGroup_i()];
	}
	var _proto = UnitSkin.prototype;

	_proto.pGroup_i = function () {
		var t = new eui.Group();
		this.pGroup = t;
		t.height = 100;
		t.width = 100;
		t.elementsContent = [this.imgCar_i(),this.imgUnit_i(),this._Group1_i()];
		return t;
	};
	_proto.imgCar_i = function () {
		var t = new eui.Image();
		this.imgCar = t;
		t.horizontalCenter = 0;
		t.source = "1_png";
		t.y = 0;
		return t;
	};
	_proto.imgUnit_i = function () {
		var t = new eui.Image();
		this.imgUnit = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 85;
		t.horizontalCenter = 0.5;
		t.source = "Riders01_png";
		t.verticalCenter = -10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 100;
		t.width = 100;
		t.elementsContent = [this._Image1_i(),this.imgHp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(33,3,413,20);
		t.source = "jinDuTiao_1_png";
		t.width = 100;
		return t;
	};
	_proto.imgHp_i = function () {
		var t = new eui.Image();
		this.imgHp = t;
		t.scale9Grid = new egret.Rectangle(15,3,455,20);
		t.source = "jinDuTiao_2_png";
		t.width = 100;
		return t;
	};
	return UnitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/start/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	var StartSkin$Skin1 = 	(function (_super) {
		__extends(StartSkin$Skin1, _super);
		function StartSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","alpha",0.8),
						new eui.SetProperty("labelDisplay","textColor",0xeeeeee)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Rect1","fillColor",0x666666),
						new eui.SetProperty("labelDisplay","textColor",0x666666)
					])
			];
		}
		var _proto = StartSkin$Skin1.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.ellipseHeight = 15;
			t.ellipseWidth = 15;
			t.fillColor = 0x827f6e;
			t.percentHeight = 100;
			t.strokeWeight = 2;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bottom = 15;
			t.left = 15;
			t.right = 15;
			t.textAlign = "center";
			t.top = 15;
			t.verticalAlign = "middle";
			return t;
		};
		return StartSkin$Skin1;
	})(eui.Skin);

	function StartSkin() {
		_super.call(this);
		this.skinParts = ["btnStartGame"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btnStartGame_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_1_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "bg_1_png";
		return t;
	};
	_proto.btnStartGame_i = function () {
		var t = new eui.Button();
		this.btnStartGame = t;
		t.bottom = 400;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.skinName = StartSkin$Skin1;
		return t;
	};
	return StartSkin;
})(eui.Skin);