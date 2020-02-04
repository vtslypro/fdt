import LocalizedStrings from 'react-localization';

module.exports = {
	 localizedStrings: new LocalizedStrings({
		en: {
			visible: "Visible",
			productVisible: "Product/Cloud service/Update is delivered",
			productFiltered: "Product/Cloud service/Update is blocked",
			productInvalidUnitType: "Unit type not supported",
			productAxonStatMismatch: " Product/Update is in preview state",
			"Found a newer product version": "Product version Blocked – superceded by a newer version",
			"Found a newer product version CU": "Product version CU Blocked – superceded by a newer version",
			ProductversionCUBlocked: "Superceded by a newer version",
			productUpdateReleaseVersionMismatch: "Update version does not match with that of product",
			productUpdateReleaseMilestoneMismatch: "Update milestone does not match with that of product",
			adminAllows: "Allowed by Admin",
			adminGlobalFilterForAll: "Blocked by Admin for all users",
			adminGlobalFilterForUser: "Blocked by Admin through a white list setting",
			adminProductFilterForAll: "Blocked by Admin for all users",
			adminProductFilterForUser: "Blocked by Admin through a white list setting",
			adminUpdateFilterForAll: "Blocked by Admin for all users",
			adminUpdateFilterForUser: "Blocked by Admin through a white list setting",
			entitlementEntitled: "User has required entitlements",
			entitlementNotEntitledRequiresContract: "User does not have required subscription entitlements",
			entitlementNotEntitledRequiresNoContract: "User is required to be NOT on subscription",
			entitlementNotEntiteldNoEntitlementsFound: "User does not have any entitlements",
			contractValid: "Contract is valid",
			contractIdIsMissing: "Contract id is missing",
			contractNotCPROrCSR: "Unsupported featureType",
			contractWrongAssetStatus: "Unsupported Asset Status",
			contractRegistrationTimeInFuture: "Contract registration date is in future",
			contractMissingDeploymentOrUsageType: "Deployment or usageType is missing",
			Error_Entproduct_Nomatch: "latest version blocks the previous version or no data in Rover for that product",
			"Product Update is expired.":"Product Update is expired."
		}
	})

}