warning: in the working copy of 'entry/src/main/ets/pages/Index.ets', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/entry/src/main/ets/pages/Index.ets b/entry/src/main/ets/pages/Index.ets[m
[1mindex 1062b02..b63b92f 100644[m
[1m--- a/entry/src/main/ets/pages/Index.ets[m
[1m+++ b/entry/src/main/ets/pages/Index.ets[m
[36m@@ -1096,58 +1096,88 @@[m [mstruct Index {[m
             this.addPoint('nosotros')[m
           })[m
 [m
[31m-          Row() {[m
[31m-            Button('Undo')[m
[31m-              .fontSize(10)[m
[32m+[m[32m          Stack() {[m
[32m+[m[32m            Row() {[m
[32m+[m[32m              Button('Undo')[m
[32m+[m[32m                .fontSize(10)[m
[32m+[m[32m                .width(78)[m
[32m+[m[32m                .height(20)[m
[32m+[m[32m                .borderRadius(12)[m
[32m+[m[32m                .backgroundColor('#3A3A3A')[m
[32m+[m[32m                .fontColor(Color.White)[m
[32m+[m[32m                .enabled(this.hayDeshacer || this.canReturnToServerSelection())[m
[32m+[m
[32m+[m[32m              Column() {[m
[32m+[m[32m                Text(this.estadoCentro())[m
[32m+[m[32m                  .fontSize(12)[m
[32m+[m[32m                  .fontWeight(FontWeight.Bold)[m
[32m+[m[32m                  .fontColor('#FFFFFF')[m
[32m+[m[32m                  .maxLines(1)[m
[32m+[m[32m                  .textAlign(TextAlign.Center)[m
[32m+[m[32m                  .width(90)[m
[32m+[m[32m                  .height(13)[m
[32m+[m
[32m+[m[32m                Text(this.estadoCentroSecundario())[m
[32m+[m[32m                  .fontSize(7)[m
[32m+[m[32m                  .fontColor('#DDDDDD')[m
[32m+[m[32m                  .maxLines(1)[m
[32m+[m[32m                  .textAlign(TextAlign.Center)[m
[32m+[m[32m                  .width(78)[m
[32m+[m[32m                  .height(0)[m
[32m+[m[32m              }[m
               .width(78)[m
               .height(20)[m
[31m-              .borderRadius(12)[m
[31m-              .backgroundColor('#3A3A3A')[m
[31m-              .enabled(this.hayDeshacer || this.canReturnToServerSelection())[m
[31m-              .onClick(() => {[m
[31m-                this.undoPoint()[m
[31m-              })[m
[31m-              .responseRegion({ x: -35, y: -35, width: 150, height: 95 })[m
[31m-[m
[31m-            Column() {[m
[31m-              Text(this.estadoCentro())[m
[31m-                .fontSize(12)[m
[31m-                .fontWeight(FontWeight.Bold)[m
[31m-                .fontColor('#FFFFFF')[m
[31m-                .maxLines(1)[m
[31m-                .textAlign(TextAlign.Center)[m
[31m-                .width(90)[m
[31m-                .height(13)[m
[31m-[m
[31m-              Text(this.estadoCentroSecundario())[m
[31m-                .fontSize(7)[m
[31m-                .fontColor('#DDDDDD')[m
[31m-                .maxLines(1)[m
[31m-                .textAlign(TextAlign.Center)[m
[32m+[m[32m              .justifyContent(FlexAlign.Center)[m
[32m+[m[32m              .alignItems(HorizontalAlign.Center)[m
[32m+[m
[32m+[m[32m              Button('Reset')[m
[32m+[m[32m                .fontSize(10)[m
                 .width(78)[m
[31m-                .height(0)[m
[32m+[m[32m                .height(20)[m
[32m+[m[32m                .borderRadius(12)[m
[32m+[m[32m                .backgroundColor('#3A3A3A')[m
[32m+[m[32m                .fontColor(Color.White)[m
             }[m
[31m-            .width(78)[m
[31m-            .height(20)[m
[31m-            .justifyContent(FlexAlign.Center)[m
[31m-            .alignItems(HorizontalAlign.Center)[m
[32m+[m[32m            .width('100%')[m
[32m+[m[32m            .height(40)[m
[32m+[m[32m            .justifyContent(FlexAlign.SpaceBetween)[m
[32m+[m[32m            .alignItems(VerticalAlign.Center)[m
[32m+[m[32m            .backgroundColor('#000000')[m
[32m+[m
[32m+[m[32m            Row() {[m
[32m+[m[32m              Button('')[m
[32m+[m[32m                .width('34%')[m
[32m+[m[32m                .height('100%')[m
[32m+[m[32m                .borderRadius(0)[m
[32m+[m[32m                .backgroundColor('#000000')[m
[32m+[m[32m                .opacity(0.01)[m
[32m+[m[32m                .enabled(this.hayDeshacer || this.canReturnToServerSelection())[m
[32m+[m[32m                .onClick(() => {[m
[32m+[m[32m                  this.undoPoint()[m
[32m+[m[32m                })[m
 [m
[31m-            Button('Reset')[m
[31m-              .fontSize(10)[m
[31m-              .width(78)[m
[31m-              .height(20)[m
[31m-              .borderRadius(12)[m
[31m-              .backgroundColor('#3A3A3A')[m
[31m-              .onClick(() => {[m
[31m-                this.requestReset()[m
[31m-              })[m
[31m-              .responseRegion({ x: -35, y: -35, width: 150, height: 95 })[m
[32m+[m[32m              Blank()[m
[32m+[m[32m                .width('32%')[m
[32m+[m[32m                .height('100%')[m
[32m+[m
[32m+[m[32m              Button('')[m
[32m+[m[32m                .width('34%')[m
[32m+[m[32m                .height('100%')[m
[32m+[m[32m                .borderRadius(0)[m
[32m+[m[32m                .backgroundColor('#000000')[m
[32m+[m[32m                .opacity(0.01)[m
[32m+[m[32m                .onClick(() => {[m
[32m+[m[32m                  this.requestReset()[m
[32m+[m[32m                })[m
[32m+[m[32m            }[m
[32m+[m[32m            .width('100%')[m
[32m+[m[32m            .height(84)[m
[32m+[m[32m            .justifyContent(FlexAlign.SpaceBetween)[m
[32m+[m[32m            .alignItems(VerticalAlign.Center)[m
           }[m
           .width('100%')[m
           .height(40)[m
[31m-          .justifyContent(FlexAlign.SpaceBetween)[m
[31m-          .alignItems(VerticalAlign.Center)[m
[31m-          .margin({ top: 0, bottom: 0 })[m
[32m+[m[32m          .margin({ top: -22, bottom: -22 })[m
 [m
           Column() {[m
             Text(this.nombreEquipo('rivales'))[m
[36m@@ -1243,5 +1273,6 @@[m [mstruct Index {[m
 [m
 [m
 [m
[41m+[m
 [m
 [m
