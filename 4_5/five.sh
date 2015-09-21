команды в консоли:

mkdir to/{a..z}
for i in {a..z}; do if [ -e $i* ]; then mv *$i* ../to/${i:0:1}; fi;done;
cd ../to/;
for i in {a..z}; do cd $i/; for s in *$i_*; do if [ $s != "**" ];then mv $s ${s/${s:0:2}}; fi  ;done  ;cd ../; done;
