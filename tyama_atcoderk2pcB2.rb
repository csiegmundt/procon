#!/usr/bin/ruby
N,A,*C=STDIN.read.split("\n");puts A.split.map(&:to_i).sort[3,7].zip(C.map{|e|e.split ''}.transpose.map{|e|e.join.split('-').map(&:length).max||0}.sort).any?{|e|e[0]<e[1]}?'NO':'YES'