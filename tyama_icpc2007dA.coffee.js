#!/usr/bin/node
// Generated by CoffeeScript 1.3.1 (minified manually)
(function() {
  var a=[],ma,mi,n=0,s,stdin;
  stdin=process.openStdin();
  stdin.setEncoding('utf8');

  stdin.on('data', function(input) {
    var i=0,len,ref,x=[];
    ref=input.split("\n");
    for(len=ref.length;i<len;i++){
      x.push(parseInt(ref[i]));
    }
    if(x.length>2||!isNaN(x[1]))a=x;
    else a.push(x[0]);
  });

  stdin.on('end', function(z) {
    var i,m;
    n=0;
    while(true){
      m=a[n];
      if(m==0)process.exit();
      s=0;ma=0;mi=1000;
      for(i=n+1;i<=n+m;i++){
        s=s+a[i];
        if(ma<a[i])ma=a[i];
        if(mi>a[i])mi=a[i];
      }
      console.log(Math.floor((s-ma-mi)/(m-2)));
      n=n+m+1;
    }
  });
}).call(this);