#!/usr/bin/ruby
p 1901.step(2000).map{|y|1.step(12).count{|m|Time.gm(y,m,1).wday==0}}.reduce(:+)