#!/usr/bin/ruby
q=[1,1];r=[0,1]
p 2.step(1001).count{|i|q.push(2*q[i-1]+q[i-2]);r.push(2*r[i-1]+r[i-2]);q[i].to_s.length>r[i].to_s.length}