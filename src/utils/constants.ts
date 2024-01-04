export const enum MENU_ITEM_KEY {
  Home,
  Contact,
  AdminDashboard,
  UserInfo,
  Account,
}

export const enum ADMIN_MENU_ITEM_KEY {
  Account,
  user,
}


export const enum SALES_ORDER_3_PARTIES_2_POSITION_COL_NOS{
taxesTaxResult=67,
taxesTaxType,
taxesTaxCode,
taxesRateClassification,
taxesTotalTax,
taxesSitus,
inputOutType,
sellerRegistrationId,
taxesIsService,
taxesInvoiceTextCode,
assistedParametersPhasePostRuleName,
assistedParametersPhasePreRuleName,
errorText
}

export const enum SALES_ORDER_2_PARTIES_1_POSITION_COL_NOS{
  taxesTaxResult=63,
  taxesTaxType,
  taxesTaxCode,
  taxesRateClassification,
  taxesTotalTax,
  taxesSitus,
  inputOutType,
  sellerRegistrationId,
  taxesIsService,
  taxesInvoiceTextCode,
  assistedParametersPhasePostRuleName,
  assistedParametersPhasePreRuleName,
  errorText
  }

  export const enum PURCHASE_ORDER_3_PARTIES_2_POSITION_COL_NOS{
    taxesTaxResult=68,
    taxesTaxType,
    taxesTaxCode,
    taxesRateClassification,
    taxesTotalTax,
    taxesIsService,
    taxesSitus,
    inputOutType,
    buyerRegistrationId,
    taxesInvoiceTextCode,
    assistedParametersPhasePostRuleName,
    assistedParametersPhasePreRuleName,
    effectiveRate,
    recoverablePercent,
    errorText
    }
  export const enum PURCHASE_ORDER_2_PARTIES_2_POSITION_COL_NOS{
    taxesTaxResult=64,
    taxesTaxType,
    taxesTaxCode,
    taxesRateClassification,
    taxesTotalTax,
    taxesIsService,
    taxesSitus,
    inputOutType,
    buyerRegistrationId,
    taxesInvoiceTextCode,
    assistedParametersPhasePostRuleName,
    assistedParametersPhasePreRuleName,
    effectiveRate,
    recoverablePercent,
    errorText
    }