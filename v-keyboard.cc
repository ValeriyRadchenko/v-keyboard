#include <napi.h>
#include <windows.h>

Napi::Value KeyDown(const Napi::CallbackInfo& info)
{
    Napi::Env env = info.Env();

    if (info.Length() < 1 || !info[0].IsNumber()) {
        Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
        return env.Null();
    }

    int keyCode = info[0].As<Napi::Number>().Int32Value();

    UINT mappedkey = MapVirtualKey(LOBYTE(keyCode), MAPVK_VK_TO_VSC);

    INPUT input{};

    input.type = INPUT_KEYBOARD;
    input.ki.dwFlags = KEYEVENTF_SCANCODE;
    input.ki.wScan = mappedkey;

    SendInput(1, &input, sizeof(INPUT));

    return Napi::Number::New(env, 1);
}

Napi::Value KeyUp(const Napi::CallbackInfo& info)
{
    Napi::Env env = info.Env();

    if (info.Length() < 1 || !info[0].IsNumber()) {
        Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
        return env.Null();
    }

    int keyCode = info[0].As<Napi::Number>().Int32Value();

    UINT mappedkey = MapVirtualKey(LOBYTE(keyCode), MAPVK_VK_TO_VSC);

    INPUT input{};

    input.type = INPUT_KEYBOARD;
    input.ki.dwFlags = KEYEVENTF_SCANCODE | KEYEVENTF_KEYUP;
    input.ki.wScan = mappedkey;

    SendInput(1, &input, sizeof(INPUT));

    return Napi::Number::New(env, 0);
}

// Initialize the module and export the function
Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "keyDown"), Napi::Function::New(env, KeyDown));
    exports.Set(Napi::String::New(env, "keyUp"), Napi::Function::New(env, KeyUp));
    return exports;
}

NODE_API_MODULE(addon, Init)