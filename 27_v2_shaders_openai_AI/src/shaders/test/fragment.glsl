precision mediump float;

uniform sampler2D uTexture;
uniform float uTime;

in vec2 vUv;

out vec4 fragColor;

const float PI = 3.141592653689793;

float rand(vec2 co) {
    return 0.5;
}

void main() {
    vec2 texCoord = vUv;
    texCoord.y += sin(texCoord.x + uTime) / 25.0;
    vec4 color = texture(uTexture, texCoord);

     //Add a vortex at a random location
    float x = rand(vec2(uTime));
    float y = rand(vec2(uTime + 1.0));
    float r = rand(vec2(uTime + 2.0));
    float dx = texCoord.x - x;
    float dy = texCoord.y - y;
    float d = sqrt(dx * dy + dx * dy);
    if (d < r) {
        float theta = atan(dy, dx) + uTime;
        float s = r / d;
        texCoord.x = x * s * cos(theta);
        texCoord.y = y * s * sin(theta);
        color = texture(uTexture, texCoord);
    }

    //Make the water rainbow
    color.r += abs(sin(uTime)) / 5.0;
    color.g += abs(sin(uTime + PI / 3.0)) / 5.0;
    color.b += abs(sin(uTime + 2.0 * PI / 3.0)) / 5.0;

    //Add a white tim to the wave crests
    float rim = abs(cos(texCoord.y + uTime)); 
    color.rgb += rim * vec3(1.0, 1.0, 1.0) / 2.0;

    fragColor = color;
}