a[50];main(n,p,x,c){for(;scanf("%d%d",&n,&p),x=p;printf("%d\n",--c),a[c]=0)for(c=n;a[c-1]<p;c++)c%=n,x?x--,a[c]++:(x+=a[c],a[c]=0);}