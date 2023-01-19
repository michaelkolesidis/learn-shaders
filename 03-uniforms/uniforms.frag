#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {

    // Options:  sin(), cos(), tan(), asin(), 
    // acos(), atan(), pow(), exp(), log(), 
    // sqrt(), abs(), sign(), floor(), ceil(), 
    // fract(), mod(), min(), max() and clamp()
    
    float slow_time = u_time * 0.1;

	gl_FragColor = vec4(

         abs(cos(slow_time / 2.0)),

        abs(sin(slow_time * 20.0)),
       
        abs((cos(slow_time * 10.0) + sin(slow_time * 5.0)) / 2.0),

        1.0
        );
}