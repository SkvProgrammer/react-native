import"../shell/shell.js";import*as e from"../../core/common/common.js";import*as t from"../../core/root/root.js";import*as o from"../../ui/legacy/legacy.js";import*as i from"../../core/i18n/i18n.js";import*as n from"../../models/issues_manager/issues_manager.js";import*as a from"../../core/sdk/sdk.js";import*as r from"../../models/workspace/workspace.js";import*as s from"../../panels/network/forward/forward.js";import*as l from"../main/main.js";const c={toggleDeviceToolbar:"Toggle device toolbar",captureScreenshot:"Capture screenshot",captureFullSizeScreenshot:"Capture full size screenshot",captureNodeScreenshot:"Capture node screenshot",showMediaQueries:"Show media queries",device:"device",hideMediaQueries:"Hide media queries",showRulers:"Show rulers in the Device Mode toolbar",hideRulers:"Hide rulers in the Device Mode toolbar",showDeviceFrame:"Show device frame",hideDeviceFrame:"Hide device frame"},g=i.i18n.registerUIStrings("panels/emulation/emulation-meta.ts",c),d=i.i18n.getLazilyComputedLocalizedString.bind(void 0,g);let u;async function m(){return u||(u=await import("../../panels/emulation/emulation.js")),u}o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.MOBILE,actionId:"emulation.toggle-device-mode",toggleable:!0,loadActionDelegate:async()=>(await m()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:d(c.toggleDeviceToolbar),iconClass:"devices",bindings:[{platform:"windows,linux",shortcut:"Shift+Ctrl+M"},{platform:"mac",shortcut:"Shift+Meta+M"}]}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await m()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:d(c.captureScreenshot)}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-full-height-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await m()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:d(c.captureFullSizeScreenshot)}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-node-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await m()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:d(c.captureNodeScreenshot)}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"showMediaQueryInspector",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:d(c.showMediaQueries)},{value:!1,title:d(c.hideMediaQueries)}],tags:[d(c.device)]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"emulation.showRulers",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:d(c.showRulers)},{value:!1,title:d(c.hideRulers)}],tags:[d(c.device)]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"emulation.showDeviceOutline",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:d(c.showDeviceFrame)},{value:!1,title:d(c.hideDeviceFrame)}],tags:[d(c.device)]}),o.Toolbar.registerToolbarItem({actionId:"emulation.toggle-device-mode",condition:t.Runtime.ConditionName.CAN_DOCK,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_LEFT,order:1,showLabel:void 0,loadItem:void 0,separator:void 0}),e.AppProvider.registerAppProvider({loadAppProvider:async()=>(await m()).AdvancedApp.AdvancedAppProvider.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,order:0}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.DEVICE_MODE_MENU_SAVE,order:12,actionId:"emulation.capture-screenshot"}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.DEVICE_MODE_MENU_SAVE,order:13,actionId:"emulation.capture-full-height-screenshot"});const p={sensors:"Sensors",geolocation:"geolocation",timezones:"timezones",locale:"locale",locales:"locales",accelerometer:"accelerometer",deviceOrientation:"device orientation",locations:"Locations",touch:"Touch",devicebased:"Device-based",forceEnabled:"Force enabled",emulateIdleDetectorState:"Emulate Idle Detector state",noIdleEmulation:"No idle emulation",userActiveScreenUnlocked:"User active, screen unlocked",userActiveScreenLocked:"User active, screen locked",userIdleScreenUnlocked:"User idle, screen unlocked",userIdleScreenLocked:"User idle, screen locked",showSensors:"Show Sensors",showLocations:"Show Locations"},w=i.i18n.registerUIStrings("panels/sensors/sensors-meta.ts",p),S=i.i18n.getLazilyComputedLocalizedString.bind(void 0,w);let R;async function y(){return R||(R=await import("../../panels/sensors/sensors.js")),R}o.ViewManager.registerViewExtension({location:"drawer-view",commandPrompt:S(p.showSensors),title:S(p.sensors),id:"sensors",persistence:"closeable",order:100,loadView:async()=>(await y()).SensorsView.SensorsView.instance(),tags:[S(p.geolocation),S(p.timezones),S(p.locale),S(p.locales),S(p.accelerometer),S(p.deviceOrientation)]}),o.ViewManager.registerViewExtension({location:"settings-view",id:"emulation-locations",commandPrompt:S(p.showLocations),title:S(p.locations),order:40,loadView:async()=>(await y()).LocationsSettingsTab.LocationsSettingsTab.instance(),settings:["emulation.locations"]}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"emulation.locations",settingType:e.Settings.SettingType.ARRAY,defaultValue:[{title:"Berlin",lat:52.520007,long:13.404954,timezoneId:"Europe/Berlin",locale:"de-DE"},{title:"London",lat:51.507351,long:-.127758,timezoneId:"Europe/London",locale:"en-GB"},{title:"Moscow",lat:55.755826,long:37.6173,timezoneId:"Europe/Moscow",locale:"ru-RU"},{title:"Mountain View",lat:37.386052,long:-122.083851,timezoneId:"America/Los_Angeles",locale:"en-US"},{title:"Mumbai",lat:19.075984,long:72.877656,timezoneId:"Asia/Kolkata",locale:"mr-IN"},{title:"San Francisco",lat:37.774929,long:-122.419416,timezoneId:"America/Los_Angeles",locale:"en-US"},{title:"Shanghai",lat:31.230416,long:121.473701,timezoneId:"Asia/Shanghai",locale:"zh-Hans-CN"},{title:"São Paulo",lat:-23.55052,long:-46.633309,timezoneId:"America/Sao_Paulo",locale:"pt-BR"},{title:"Tokyo",lat:35.689487,long:139.691706,timezoneId:"Asia/Tokyo",locale:"ja-JP"}]}),e.Settings.registerSettingExtension({title:S(p.touch),reloadRequired:!0,settingName:"emulation.touch",settingType:e.Settings.SettingType.ENUM,defaultValue:"none",options:[{value:"none",title:S(p.devicebased),text:S(p.devicebased)},{value:"force",title:S(p.forceEnabled),text:S(p.forceEnabled)}]}),e.Settings.registerSettingExtension({title:S(p.emulateIdleDetectorState),settingName:"emulation.idleDetection",settingType:e.Settings.SettingType.ENUM,defaultValue:"none",options:[{value:"none",title:S(p.noIdleEmulation),text:S(p.noIdleEmulation)},{value:'{"isUserActive":true,"isScreenUnlocked":true}',title:S(p.userActiveScreenUnlocked),text:S(p.userActiveScreenUnlocked)},{value:'{"isUserActive":true,"isScreenUnlocked":false}',title:S(p.userActiveScreenLocked),text:S(p.userActiveScreenLocked)},{value:'{"isUserActive":false,"isScreenUnlocked":true}',title:S(p.userIdleScreenUnlocked),text:S(p.userIdleScreenUnlocked)},{value:'{"isUserActive":false,"isScreenUnlocked":false}',title:S(p.userIdleScreenLocked),text:S(p.userIdleScreenLocked)}]});const A={developerResources:"Developer Resources",showDeveloperResources:"Show Developer Resources"},h=i.i18n.registerUIStrings("panels/developer_resources/developer_resources-meta.ts",A),v=i.i18n.getLazilyComputedLocalizedString.bind(void 0,h);let E;o.ViewManager.registerViewExtension({location:"drawer-view",id:"resource-loading-pane",title:v(A.developerResources),commandPrompt:v(A.showDeveloperResources),order:100,persistence:"closeable",experiment:t.Runtime.ExperimentName.DEVELOPER_RESOURCES_VIEW,loadView:async()=>new((await async function(){return E||(E=await import("../../panels/developer_resources/developer_resources.js")),E}()).DeveloperResourcesView.DeveloperResourcesView)});const T={rendering:"Rendering",showRendering:"Show Rendering",paint:"paint",layout:"layout",fps:"fps",cssMediaType:"CSS media type",cssMediaFeature:"CSS media feature",visionDeficiency:"vision deficiency",colorVisionDeficiency:"color vision deficiency",reloadPage:"Reload page",hardReloadPage:"Hard reload page",forceAdBlocking:"Force ad blocking on this site",blockAds:"Block ads on this site",showAds:"Show ads on this site, if allowed",autoOpenDevTools:"Auto-open DevTools for popups",doNotAutoOpen:"Do not auto-open DevTools for popups",disablePaused:"Disable paused state overlay",toggleCssPrefersColorSchemeMedia:"Toggle CSS media feature prefers-color-scheme"},N=i.i18n.registerUIStrings("entrypoints/inspector_main/inspector_main-meta.ts",T),k=i.i18n.getLazilyComputedLocalizedString.bind(void 0,N);let f;async function C(){return f||(f=await import("../inspector_main/inspector_main.js")),f}o.ViewManager.registerViewExtension({location:"drawer-view",id:"rendering",title:k(T.rendering),commandPrompt:k(T.showRendering),persistence:"closeable",order:50,loadView:async()=>(await C()).RenderingOptions.RenderingOptionsView.instance(),tags:[k(T.paint),k(T.layout),k(T.fps),k(T.cssMediaType),k(T.cssMediaFeature),k(T.visionDeficiency),k(T.colorVisionDeficiency)]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.NAVIGATION,actionId:"inspector_main.reload",loadActionDelegate:async()=>(await C()).InspectorMain.ReloadActionDelegate.instance(),iconClass:"refresh",title:k(T.reloadPage),bindings:[{platform:"windows,linux",shortcut:"Ctrl+R"},{platform:"windows,linux",shortcut:"F5"},{platform:"mac",shortcut:"Meta+R"}]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.NAVIGATION,actionId:"inspector_main.hard-reload",loadActionDelegate:async()=>(await C()).InspectorMain.ReloadActionDelegate.instance(),title:k(T.hardReloadPage),bindings:[{platform:"windows,linux",shortcut:"Shift+Ctrl+R"},{platform:"windows,linux",shortcut:"Shift+F5"},{platform:"windows,linux",shortcut:"Ctrl+F5"},{platform:"windows,linux",shortcut:"Ctrl+Shift+F5"},{platform:"mac",shortcut:"Shift+Meta+R"}]}),o.ActionRegistration.registerActionExtension({actionId:"rendering.toggle-prefers-color-scheme",category:o.ActionRegistration.ActionCategory.RENDERING,title:k(T.toggleCssPrefersColorSchemeMedia),loadActionDelegate:async()=>(await C()).RenderingOptions.ReloadActionDelegate.instance()}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,title:k(T.forceAdBlocking),settingName:"network.adBlockingEnabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!1,options:[{value:!0,title:k(T.blockAds)},{value:!1,title:k(T.showAds)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GLOBAL,storageType:e.Settings.SettingStorageType.Synced,title:k(T.autoOpenDevTools),settingName:"autoAttachToCreatedPages",settingType:e.Settings.SettingType.BOOLEAN,order:2,defaultValue:!1,options:[{value:!0,title:k(T.autoOpenDevTools)},{value:!1,title:k(T.doNotAutoOpen)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.APPEARANCE,storageType:e.Settings.SettingStorageType.Synced,title:k(T.disablePaused),settingName:"disablePausedStateOverlay",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),o.Toolbar.registerToolbarItem({loadItem:async()=>(await C()).InspectorMain.NodeIndicator.instance(),order:2,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_LEFT,showLabel:void 0,condition:void 0,separator:void 0,actionId:void 0}),o.Toolbar.registerToolbarItem({loadItem:async()=>(await C()).OutermostTargetSelector.OutermostTargetSelector.instance(),order:98,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_RIGHT,showLabel:void 0,condition:void 0,separator:void 0,actionId:void 0,experiment:t.Runtime.ExperimentName.OUTERMOST_TARGET_SELECTOR});const I={issues:"Issues",showIssues:"Show Issues",cspViolations:"CSP Violations",showCspViolations:"Show CSP Violations"},P=i.i18n.registerUIStrings("panels/issues/issues-meta.ts",I),x=i.i18n.getLazilyComputedLocalizedString.bind(void 0,P);let L;async function b(){return L||(L=await import("../../panels/issues/issues.js")),L}o.ViewManager.registerViewExtension({location:"drawer-view",id:"issues-pane",title:x(I.issues),commandPrompt:x(I.showIssues),order:100,persistence:"closeable",loadView:async()=>(await b()).IssuesPane.IssuesPane.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"csp-violations-pane",title:x(I.cspViolations),commandPrompt:x(I.showCspViolations),order:100,persistence:"closeable",loadView:async()=>(await b()).CSPViolationsView.CSPViolationsView.instance(),experiment:t.Runtime.ExperimentName.CSP_VIOLATIONS_VIEW}),e.Revealer.registerRevealer({contextTypes:()=>[n.Issue.Issue],destination:e.Revealer.RevealerDestination.ISSUES_VIEW,loadRevealer:async()=>(await b()).IssueRevealer.IssueRevealer.instance()});const D={throttling:"Throttling",showThrottling:"Show Throttling",goOffline:"Go offline",device:"device",throttlingTag:"throttling",enableSlowGThrottling:"Enable slow `3G` throttling",enableFastGThrottling:"Enable fast `3G` throttling",goOnline:"Go online"},V=i.i18n.registerUIStrings("panels/mobile_throttling/mobile_throttling-meta.ts",D),O=i.i18n.getLazilyComputedLocalizedString.bind(void 0,V);let _;async function M(){return _||(_=await import("../../panels/mobile_throttling/mobile_throttling.js")),_}o.ViewManager.registerViewExtension({location:"settings-view",id:"throttling-conditions",title:O(D.throttling),commandPrompt:O(D.showThrottling),order:35,loadView:async()=>(await M()).ThrottlingSettingsTab.ThrottlingSettingsTab.instance(),settings:["customNetworkConditions"]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-offline",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(D.goOffline),loadActionDelegate:async()=>(await M()).ThrottlingManager.ActionDelegate.instance(),tags:[O(D.device),O(D.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-low-end-mobile",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(D.enableSlowGThrottling),loadActionDelegate:async()=>(await M()).ThrottlingManager.ActionDelegate.instance(),tags:[O(D.device),O(D.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-mid-tier-mobile",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(D.enableFastGThrottling),loadActionDelegate:async()=>(await M()).ThrottlingManager.ActionDelegate.instance(),tags:[O(D.device),O(D.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-online",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(D.goOnline),loadActionDelegate:async()=>(await M()).ThrottlingManager.ActionDelegate.instance(),tags:[O(D.device),O(D.throttlingTag)]}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"customNetworkConditions",settingType:e.Settings.SettingType.ARRAY,defaultValue:[]});const U={showNetwork:"Show Network",network:"Network",showNetworkRequestBlocking:"Show Network request blocking",networkRequestBlocking:"Network request blocking",showNetworkConditions:"Show Network conditions",networkConditions:"Network conditions",diskCache:"disk cache",networkThrottling:"network throttling",showSearch:"Show Search",search:"Search",recordNetworkLog:"Record network log",stopRecordingNetworkLog:"Stop recording network log",hideRequestDetails:"Hide request details",colorcodeResourceTypes:"Color-code resource types",colorCode:"color code",resourceType:"resource type",colorCodeByResourceType:"Color code by resource type",useDefaultColors:"Use default colors",groupNetworkLogByFrame:"Group network log by frame",netWork:"network",frame:"frame",group:"group",groupNetworkLogItemsByFrame:"Group network log items by frame",dontGroupNetworkLogItemsByFrame:"Don't group network log items by frame",clear:"Clear network log"},B=i.i18n.registerUIStrings("panels/network/network-meta.ts",U),F=i.i18n.getLazilyComputedLocalizedString.bind(void 0,B);let z;async function W(){return z||(z=await import("../../panels/network/network.js")),z}function j(e){return void 0===z?[]:e(z)}o.ViewManager.registerViewExtension({location:"panel",id:"network",commandPrompt:F(U.showNetwork),title:F(U.network),order:40,condition:t.Runtime.ConditionName.REACT_NATIVE_UNSTABLE_NETWORK_PANEL,loadView:async()=>(await W()).NetworkPanel.NetworkPanel.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"network.blocked-urls",commandPrompt:F(U.showNetworkRequestBlocking),title:F(U.networkRequestBlocking),persistence:"closeable",order:60,loadView:async()=>(await W()).BlockedURLsPane.BlockedURLsPane.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"network.config",commandPrompt:F(U.showNetworkConditions),title:F(U.networkConditions),persistence:"closeable",order:40,tags:[F(U.diskCache),F(U.networkThrottling),i.i18n.lockedLazyString("useragent"),i.i18n.lockedLazyString("user agent"),i.i18n.lockedLazyString("user-agent")],loadView:async()=>(await W()).NetworkConfigView.NetworkConfigView.instance()}),o.ViewManager.registerViewExtension({location:"network-sidebar",id:"network.search-network-tab",commandPrompt:F(U.showSearch),title:F(U.search),persistence:"permanent",loadView:async()=>(await W()).NetworkPanel.SearchNetworkView.instance()}),o.ActionRegistration.registerActionExtension({actionId:"network.toggle-recording",category:o.ActionRegistration.ActionCategory.NETWORK,iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await W()).NetworkPanel.ActionDelegate.instance(),options:[{value:!0,title:F(U.recordNetworkLog)},{value:!1,title:F(U.stopRecordingNetworkLog)}],bindings:[{shortcut:"Ctrl+E",platform:"windows,linux"},{shortcut:"Meta+E",platform:"mac"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.clear",category:o.ActionRegistration.ActionCategory.NETWORK,title:F(U.clear),iconClass:"clear",loadActionDelegate:async()=>(await W()).NetworkPanel.ActionDelegate.instance(),contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),bindings:[{shortcut:"Ctrl+L"},{shortcut:"Meta+K",platform:"mac"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.hide-request-details",category:o.ActionRegistration.ActionCategory.NETWORK,title:F(U.hideRequestDetails),contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await W()).NetworkPanel.ActionDelegate.instance(),bindings:[{shortcut:"Esc"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.search",category:o.ActionRegistration.ActionCategory.NETWORK,title:F(U.search),contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await W()).NetworkPanel.ActionDelegate.instance(),bindings:[{platform:"mac",shortcut:"Meta+F",keybindSets:["devToolsDefault","vsCode"]},{platform:"windows,linux",shortcut:"Ctrl+F",keybindSets:["devToolsDefault","vsCode"]}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,storageType:e.Settings.SettingStorageType.Synced,title:F(U.colorcodeResourceTypes),settingName:"networkColorCodeResourceTypes",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,tags:[F(U.colorCode),F(U.resourceType)],options:[{value:!0,title:F(U.colorCodeByResourceType)},{value:!1,title:F(U.useDefaultColors)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,storageType:e.Settings.SettingStorageType.Synced,title:F(U.groupNetworkLogByFrame),settingName:"network.group-by-frame",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,tags:[F(U.netWork),F(U.frame),F(U.group)],options:[{value:!0,title:F(U.groupNetworkLogItemsByFrame)},{value:!1,title:F(U.dontGroupNetworkLogItemsByFrame)}]}),o.ViewManager.registerLocationResolver({name:"network-sidebar",category:o.ViewManager.ViewLocationCategory.NETWORK,loadResolver:async()=>(await W()).NetworkPanel.NetworkPanel.instance()}),o.ContextMenu.registerProvider({contextTypes:()=>[a.NetworkRequest.NetworkRequest,a.Resource.Resource,r.UISourceCode.UISourceCode],loadProvider:async()=>(await W()).NetworkPanel.ContextMenuProvider.instance(),experiment:void 0}),e.Revealer.registerRevealer({contextTypes:()=>[a.NetworkRequest.NetworkRequest],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await W()).NetworkPanel.RequestRevealer.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[s.UIRequestLocation.UIRequestLocation],loadRevealer:async()=>(await W()).NetworkPanel.RequestLocationRevealer.instance(),destination:void 0}),e.Revealer.registerRevealer({contextTypes:()=>[s.NetworkRequestId.NetworkRequestId],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await W()).NetworkPanel.RequestIdRevealer.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[s.UIFilter.UIRequestFilter],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await W()).NetworkPanel.NetworkLogWithFilterRevealer.instance()});const q={profiler:"Profiler",showProfiler:"Show Profiler",performance:"Performance",showPerformance:"Show Performance",startStopRecording:"Start/stop recording",showRecentTimelineSessions:"Show recent timeline sessions",record:"Record",stop:"Stop",startProfilingAndReloadPage:"Start profiling and reload page"},K=i.i18n.registerUIStrings("panels/js_profiler/js_profiler-meta.ts",q),G=i.i18n.getLazilyComputedLocalizedString.bind(void 0,K);let H,J;async function Q(){return J||(J=await import("../../panels/profiler/profiler.js")),J}async function Y(){return H||(H=await import("../../panels/timeline/timeline.js")),H}function X(e){return void 0===H?[]:e(H)}o.ViewManager.registerViewExtension({location:"panel",id:"js_profiler",title:G(q.profiler),commandPrompt:G(q.showProfiler),order:65,persistence:"permanent",experiment:t.Runtime.ExperimentName.JS_PROFILER_TEMP_ENABLE,loadView:async()=>(await Q()).ProfilesPanel.JSProfilerPanel.instance()}),o.ActionRegistration.registerActionExtension({actionId:"profiler.js-toggle-recording",category:o.ActionRegistration.ActionCategory.JAVASCRIPT_PROFILER,title:G(q.startStopRecording),iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>void 0===J?[]:(e=>[e.ProfilesPanel.JSProfilerPanel])(J),loadActionDelegate:async()=>(await Q()).ProfilesPanel.JSProfilerPanel.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.show-history",loadActionDelegate:async()=>(await Y()).TimelinePanel.ActionDelegate.instance(),category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:G(q.showRecentTimelineSessions),contextTypes:()=>X((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Ctrl+H"},{platform:"mac",shortcut:"Meta+Y"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.toggle-recording",category:o.ActionRegistration.ActionCategory.PERFORMANCE,iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>X((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await Y()).TimelinePanel.ActionDelegate.instance(),options:[{value:!0,title:G(q.record)},{value:!1,title:G(q.stop)}],bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.record-reload",iconClass:"refresh",contextTypes:()=>X((e=>[e.TimelinePanel.TimelinePanel])),category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:G(q.startProfilingAndReloadPage),loadActionDelegate:async()=>(await Y()).TimelinePanel.ActionDelegate.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+Shift+E"},{platform:"mac",shortcut:"Meta+Shift+E"}]});const Z={rnWelcome:"⚛️ Welcome",showRnWelcome:"Show React Native Welcome panel"},$=i.i18n.registerUIStrings("panels/rn_welcome/rn_welcome-meta.ts",Z),ee=i.i18n.getLazilyComputedLocalizedString.bind(void 0,$);let te;o.ViewManager.registerViewExtension({location:"panel",id:"rn-welcome",title:ee(Z.rnWelcome),commandPrompt:ee(Z.showRnWelcome),order:-10,persistence:"permanent",loadView:async()=>(await async function(){return te||(te=await import("../../panels/rn_welcome/rn_welcome.js")),te}()).RNWelcome.RNWelcomeImpl.instance(),experiment:t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI}),t.Runtime.experiments.register(t.Runtime.ExperimentName.JS_PROFILER_TEMP_ENABLE,"Enable JavaScript Profiler (legacy)",!1),t.Runtime.experiments.register(t.Runtime.ExperimentName.JS_HEAP_PROFILER_ENABLE,"Enable Heap Profiler",!1),t.Runtime.experiments.register(t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI,"Show React Native-specific UI",!1,globalThis.reactNativeDocLink??"https://reactnative.dev/docs/debugging",globalThis.FB_ONLY__reactNativeFeedbackLink),t.Runtime.experiments.enableExperimentsByDefault([t.Runtime.ExperimentName.JS_HEAP_PROFILER_ENABLE,t.Runtime.ExperimentName.JS_PROFILER_TEMP_ENABLE,t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI]);const oe={networkTitle:"React Native",showReactNative:"Show React Native"},ie=i.i18n.registerUIStrings("entrypoints/rn_inspector/rn_inspector.ts",oe),ne=i.i18n.getLazilyComputedLocalizedString.bind(void 0,ie);let ae;o.ViewManager.registerViewExtension({location:"navigator-view",id:"navigator-network",title:ne(oe.networkTitle),commandPrompt:ne(oe.showReactNative),order:2,persistence:"permanent",loadView:async()=>(await async function(){return ae||(ae=await import("../../panels/sources/sources.js")),ae}()).SourcesNavigator.NetworkNavigatorView.instance()}),self.runtime=t.Runtime.Runtime.instance({forceNew:!0}),new l.MainImpl.MainImpl;