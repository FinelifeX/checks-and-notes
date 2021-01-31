package com.checkandnotes;

import android.view.Gravity;
import android.widget.Toast;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class ToastModule extends ReactContextBaseJavaModule {
    ReactApplicationContext reactApplicationContext;

    ToastModule(ReactApplicationContext context) {
        super(context);
        this.reactApplicationContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "Toast";
    }

    @ReactMethod
    public void show(String message, String duration) {
        int mDuration = duration.equals("SHORT") ? Toast.LENGTH_SHORT : Toast.LENGTH_LONG;
        Toast mToast = Toast.makeText(this.reactApplicationContext, message, mDuration);

        mToast.setGravity(Gravity.BOTTOM, 0, 16);
        mToast.show();
    }
}
