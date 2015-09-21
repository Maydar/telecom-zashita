команды в консоли:

mkdir to/{a..z}
for i in {a..z};do mv *$i* ../to/${i:0:1}; done;
cd ../to/;
for i in {a..z}; do cd $i/; for s in *$i_*; do mv $s ${s/${s:0:2}}; done  ;cd ../; done;

