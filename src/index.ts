import { ExtensionContext, MessageConverterAlert, MessageConverterContext } from "@lichtblick/suite";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerMessageConverter({
    fromSchemaName: "osi3.SensorView",
    toSchemaName: "foxglove.SceneUpdate",
    converter: (
      _msg: unknown,
      _event: unknown,
      _globalVariables?: unknown,
      context?: MessageConverterContext
    ) => {
      for (let i = 0; i < 250; i++) {
        const alert: MessageConverterAlert = {
          severity: "error",
          message: "Test alert",
          error: Error("Test error message"),
          tip: "Test tip"
        };
        context?.emitAlert(alert, `alertId`+i.toString());
      }
      //throw new Error("Message Converter Test Error");
      return {
        entities: [],
        deletions: []
      };
    }
  });
}
