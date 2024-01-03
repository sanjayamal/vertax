import { IAccount } from "../../interfaces";

export const getPurchase3parties2ndPositionsRequestBody = (
  accountDetail: IAccount,
  data: any
) => {
  const { username, password, trustedId } = accountDetail;
  const documentNumber = data["Document Number"] ?? "";
  const documentDate = data["Document Date "] ?? "";
  const transactionType = data["Transaction Type"] ?? "";
  const currency = data["Currency"] ?? "";
  const buyerCompany = data["Buyer company"] ?? "";
  const generalLedgerAccount = data["generalLedgerAccount"] ?? "";
  const receipientCode = data["ReceipientCode"] ?? "";
  const receipientVATIsoCountryCode =
    data["ReceipientVAT Iso Country code"] ?? "";
  const receipientTaxRegistrationNumber =
    data["Receipient TaxRegistrationNumber"] ?? "";
  const vendorClassCode = data["Vendor_ classCode"] ?? "";
  const vendor = data["Vendor"] ?? "";
  const calculateVendorTax = data["Calculate Vendor Tax"] ?? "";
  const receipientTaxRegistrationHasPhysicalPresenceIndicator =
    data["ReceipientTaxRegistration hasPhysicalPresenceIndicator"] ?? "";
  const vendorTaxRegistrationHasPhysicalPresenceIndicator =
    data["Vendor_TaxRegistration hasPhysicalPresenceIndicator"] ?? "";
  const vendorTaxRegistrationNumber = data["VendorTaxRegistrationNumber"] ?? "";
  const purchaseClass = data["PurchaseClass"] ?? "";
  const purchase = data["Purchase"] ?? "";
  const vendorVATIsoCountryCode = data["Vendor VAT Iso Country code"] ?? "";
  const deliveryTerm = data["DeliveryTerm"] ?? "";
  const taxDate = data["Tax Date"] ?? "";
  const physicalOriginPostalCode = data["Physical Origin Postal Code"] ?? "";
  const physicalOriginCountry = data["Physical Origin Country"] ?? "";
  const physicalOriginRegionCode = data["Physical Origin RegionCode"] ?? "";
  const administrativeOriginPostal = data["AdministrativeOrigin Postal"] ?? "";
  const administrativeOriginCountry =
    data["AdministrativeOrigin Country"] ?? "";
  const administrativeOriginRegionCode =
    data["AdministrativeOrigin RegionCode"] ?? "";

  const destinationRegionCode = data["Destination RegionCode"] ?? "";
  const destinationCountryPostal = data["Destination Country Postal"] ?? "";
  const destinationCountry = data["Destination Country"] ?? "";
  const extendedPrice = data["Extended Price"] ?? "";
  const commodityCodeType = data["Commodity Code Type"] ?? "";
  const commodityCode = data["Commodity Code"] ?? "";
  const flexibleField1 = data["Flexible Field 1"] ?? "";
  const flexibleField2 = data["Flexible Field 2"] ?? "";
  const flexibleField3 = data["Flexible Field 3"] ?? "";
  const flexibleField4 = data["Flexible Field 4"] ?? "";
  const flexibleField5 = data["Flexible Field 5"] ?? "";
  const flexibleField6 = data["Flexible Field 6"] ?? "";
  const flexibleField7 = data["Flexible Field 7"] ?? "";
  const flexibleField8 = data["Flexible Field 8"] ?? "";
  const flexibleField9 = data["Flexible Field 9"] ?? "";
  const flexibleField10 = data["Flexible Field 10"] ?? "";
  const flexibleField11 = data["Flexible Field 11"] ?? "";
  const flexibleField12 = data["Flexible Field 12"] ?? "";
  const flexibleField13 = data["Flexible Field 13"] ?? "";
  const flexibleField14 = data["Flexible Field 14"] ?? "";
  const flexibleField15 = data["Flexible Field 15"] ?? "";
  const flexibleField16 = data["Flexible Field 16"] ?? "";
  const flexibleField17 = data["Flexible Field 17"] ?? "";
  const flexibleField18 = data["Flexible Field 18"] ?? "";
  const flexibleField19 = data["Flexible Field 19"] ?? "";
  const flexibleField20 = data["Flexible Field 20"] ?? "";
  const flexibleField21 = data["Flexible Field 21"] ?? "";
  const flexibleField22 = data["Flexible Field 22"] ?? "";
  const flexibleField23 = data["Flexible Field 23"] ?? "";
  const flexibleField24 = data["Flexible Field 24"] ?? "";
  const flexibleField25 = data["Flexible Field 25"] ?? "";

  const Purchase_Order_3Parties2ndPositionXMLString = `<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:urn="urn:vertexinc:o-series:tps:9:0">
  <soapenv:Header/>
  <soapenv:Body>
      <urn:VertexEnvelope>
          <urn:Login>
              <!--Optional:-->
              <urn:UserName>${username}</urn:UserName>
              <!--Optional:-->
              <urn:Password>${password}</urn:Password>
              <!--Optional:-->
              <urn:TrustedId>${trustedId}</urn:TrustedId>
          </urn:Login>
          <PurchaseOrderRequest documentNumber="${documentNumber}" documentDate="${documentDate}" transactionType="${transactionType}" calculateVendorTaxIndicator="${calculateVendorTax}" >
              <Currency isoCurrencyCodeAlpha="EUR" >${currency}</Currency>
              <Buyer >
                  <Company >${buyerCompany}</Company>
              </Buyer>
              <LineItem lineItemNumber="0" generalLedgerAccount="${generalLedgerAccount}" deliveryTerm="${deliveryTerm}" netMassKilograms="0" exportProcedure="CFA" transactionType="${transactionType}" taxDate="${taxDate}">
                  <Buyer >
                      <Recipient>
                      <RecipientCode>${receipientCode}</RecipientCode>
                      <TaxRegistration isoCountryCode="${receipientVATIsoCountryCode}" hasPhysicalPresenceIndicator="${receipientTaxRegistrationHasPhysicalPresenceIndicator}">
                      <TaxRegistrationNumber>${receipientTaxRegistrationNumber}</TaxRegistrationNumber>
                      </TaxRegistration>
                      </Recipient>
                      <Destination >
                          <Country >${destinationCountry}</Country>
                          <MainDivision >${destinationRegionCode}</MainDivision>
                          <PostalCode>${destinationCountryPostal}</PostalCode>
                      </Destination>
                      <AdministrativeDestination >
                          <MainDivision >${administrativeOriginRegionCode}</MainDivision>
                          <PostalCode >${administrativeOriginPostal}</PostalCode>
                          <Country >${administrativeOriginCountry}</Country>
                      </AdministrativeDestination>
                  </Buyer>
                  <Vendor >
                      <VendorCode classCode="${vendorClassCode}">${vendor}</VendorCode>
                      <PhysicalOrigin >
                          <MainDivision >${physicalOriginRegionCode}</MainDivision>
                          <PostalCode >${physicalOriginPostalCode}</PostalCode>
                          <Country >${physicalOriginCountry}</Country>
                      </PhysicalOrigin>
                      <AdministrativeOrigin >
                          <MainDivision >${administrativeOriginRegionCode}</MainDivision>
                          <PostalCode >${administrativeOriginPostal}</PostalCode>
                          <Country >${administrativeOriginCountry}</Country>
                      </AdministrativeOrigin>
                      <TaxRegistration hasPhysicalPresenceIndicator="${vendorTaxRegistrationHasPhysicalPresenceIndicator}" isoCountryCode="${vendorVATIsoCountryCode}" >
                          <TaxRegistrationNumber >${vendorTaxRegistrationNumber}</TaxRegistrationNumber>
                      </TaxRegistration>
                  </Vendor>
                  <Purchase purchaseClass="${purchaseClass}" >${purchase}</Purchase>
                  <UnitPrice >10.0</UnitPrice>
                  <ExtendedPrice >${extendedPrice}</ExtendedPrice>
                  <CommodityCode commodityCodeType="${commodityCodeType}">${commodityCode}</CommodityCode>
                  <FlexibleFields >
                  <FlexibleCodeField fieldId="1">${flexibleField1}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="2">${flexibleField2}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="3">${flexibleField3}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="4">${flexibleField4}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="4">${flexibleField4}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="5">${flexibleField5}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="6">${flexibleField6}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="7">${flexibleField7}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="8">${flexibleField8}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="9">${flexibleField9}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="10">${flexibleField10}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="11">${flexibleField11}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="12">${flexibleField12}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="13">${flexibleField13}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="14">${flexibleField14}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="15">${flexibleField15}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="16">${flexibleField16}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="17">${flexibleField17}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="18">${flexibleField18}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="19">${flexibleField19}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="20">${flexibleField20}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="21">${flexibleField21}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="22">${flexibleField22}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="23">${flexibleField23}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="24">${flexibleField24}</FlexibleCodeField>
                  <FlexibleCodeField fieldId="25">${flexibleField25}</FlexibleCodeField>
                  </FlexibleFields>
              </LineItem>
          </PurchaseOrderRequest>
          <ApplicationData>
              <MessageLogging returnLogEntries="true">
                  <OverrideLoggingThreshold thresholdScope="com.vertexinc.tps.common.domain.Transaction">SUPPORT</OverrideLoggingThreshold>
                  <OverrideLoggingThreshold>SUPPORT</OverrideLoggingThreshold>
              </MessageLogging>
          </ApplicationData>
      </urn:VertexEnvelope>
  </soapenv:Body>
</soapenv:Envelope>`;

  return Purchase_Order_3Parties2ndPositionXMLString;
};

export const getPurchase2parties2ndPositionsRequestBody = (
  accountDetail: IAccount,
  data: any
) => {
  const { username, password, trustedId } = accountDetail;
  const documentNumber = data["Document Number"] ?? "";
  const documentDate = data["Document Date "] ?? "";
  const transactionType = data["Transaction Type"] ?? "";
  const currency = data["Currency"] ?? "";
  const buyerCompany = data["Buyer company"] ?? "";
  const generalLedgerAccount = data["generalLedgerAccount"] ?? "";
  const vendorClassCode = data["Vendor_ classCode"] ?? "";
  const vendor = data["Vendor"] ?? "";
  const calculateVendorTax = data["Calculate Vendor Tax"] ?? "";
  const vendorTaxRegistrationHasPhysicalPresenceIndicator =
    data["Vendor_TaxRegistration hasPhysicalPresenceIndicator"] ?? "";
  const vendorTaxRegistrationNumber = data["VendorTaxRegistrationNumber"] ?? "";
  const purchaseClass = data["PurchaseClass"] ?? "";
  const purchase = data["Purchase"] ?? "";
  const vendorVATIsoCountryCode = data["Vendor VAT Iso Country code"] ?? "";
  const deliveryTerm = data["DeliveryTerm"] ?? "";
  const taxDate = data["Tax Date"] ?? "";
  const physicalOriginPostalCode = data["Physical Origin Postal Code"] ?? "";
  const physicalOriginCountry = data["Physical Origin Country"] ?? "";
  const physicalOriginRegionCode = data["Physical Origin RegionCode"] ?? "";
  const administrativeOriginPostal = data["AdministrativeOrigin Postal"] ?? "";
  const administrativeOriginCountry =
    data["AdministrativeOrigin Country"] ?? "";
  const administrativeOriginRegionCode =
    data["AdministrativeOrigin RegionCode"] ?? "";
  const administrativeDestinationCountry =
    data["AdministrativeDestination Country"] ?? "";
  const destinationRegionCode = data["Destination RegionCode"] ?? "";
  const destinationCountryPostal = data["Destination Country Postal"] ?? "";
  const destinationCountry = data["Destination Country"] ?? "";
  const extendedPrice = data["Extended Price"] ?? "";
  const commodityCodeType = data["Commodity Code Type"] ?? "";
  const commodityCode = data["Commodity Code"] ?? "";
  const flexibleField1 = data["Flexible Field 1"] ?? "";
  const flexibleField2 = data["Flexible Field 2"] ?? "";
  const flexibleField3 = data["Flexible Field 3"] ?? "";
  const flexibleField4 = data["Flexible Field 4"] ?? "";
  const flexibleField5 = data["Flexible Field 5"] ?? "";
  const flexibleField6 = data["Flexible Field 6"] ?? "";
  const flexibleField7 = data["Flexible Field 7"] ?? "";
  const flexibleField8 = data["Flexible Field 8"] ?? "";
  const flexibleField9 = data["Flexible Field 9"] ?? "";
  const flexibleField10 = data["Flexible Field 10"] ?? "";
  const flexibleField11 = data["Flexible Field 11"] ?? "";
  const flexibleField12 = data["Flexible Field 12"] ?? "";
  const flexibleField13 = data["Flexible Field 13"] ?? "";
  const flexibleField14 = data["Flexible Field 14"] ?? "";
  const flexibleField15 = data["Flexible Field 15"] ?? "";
  const flexibleField16 = data["Flexible Field 16"] ?? "";
  const flexibleField17 = data["Flexible Field 17"] ?? "";
  const flexibleField18 = data["Flexible Field 18"] ?? "";
  const flexibleField19 = data["Flexible Field 19"] ?? "";
  const flexibleField20 = data["Flexible Field 20"] ?? "";
  const flexibleField21 = data["Flexible Field 21"] ?? "";
  const flexibleField22 = data["Flexible Field 22"] ?? "";
  const flexibleField23 = data["Flexible Field 23"] ?? "";
  const flexibleField24 = data["Flexible Field 24"] ?? "";
  const flexibleField25 = data["Flexible Field 25"] ?? "";

  const Purchase_Order_2Parties2ndPositionXMLString = `<soapenv:Envelope
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:urn="urn:vertexinc:o-series:tps:9:0">
	<soapenv:Header/>
	<soapenv:Body>
		<urn:VertexEnvelope>
			<urn:Login>
				<!--Optional:-->
				<urn:UserName>${username}</urn:UserName>
				<!--Optional:-->
				<urn:Password>${password}</urn:Password>
				<!--Optional:-->
				<urn:TrustedId>${trustedId}</urn:TrustedId>
			</urn:Login>
			<PurchaseOrderRequest documentNumber="${documentNumber}" documentDate="${documentDate}" transactionType="${transactionType}" calculateVendorTaxIndicator="${calculateVendorTax}" >
				<Currency isoCurrencyCodeAlpha="EUR" >${currency}</Currency>
				<Buyer >
					<Company >${buyerCompany}</Company>
				</Buyer>
				<LineItem lineItemNumber="0" generalLedgerAccount="${generalLedgerAccount}" deliveryTerm="${deliveryTerm}" netMassKilograms="0" exportProcedure="CFA" transactionType="${transactionType}" taxDate="${taxDate}">
					<Buyer >
						<Destination >
							<Country >${destinationCountry}</Country>
							<MainDivision >${destinationRegionCode}</MainDivision>
							<PostalCode>${destinationCountryPostal}</PostalCode>
						</Destination>
						<AdministrativeDestination >
							<MainDivision >${administrativeOriginRegionCode}</MainDivision>
							<PostalCode >${administrativeOriginPostal}</PostalCode>
							<Country >${administrativeDestinationCountry}</Country>
						</AdministrativeDestination>
					</Buyer>
					<Vendor >
						<VendorCode classCode="${vendorClassCode}">${vendor}</VendorCode>
						<PhysicalOrigin >
							<MainDivision >${physicalOriginRegionCode}</MainDivision>
							<PostalCode >${physicalOriginPostalCode}</PostalCode>
							<Country >${physicalOriginCountry}</Country>
						</PhysicalOrigin>
						<AdministrativeOrigin >
							<MainDivision >${administrativeOriginRegionCode}</MainDivision>
							<PostalCode >${administrativeOriginPostal}</PostalCode>
							<Country >${administrativeOriginCountry}</Country>
						</AdministrativeOrigin>
						<TaxRegistration hasPhysicalPresenceIndicator="${vendorTaxRegistrationHasPhysicalPresenceIndicator}" isoCountryCode="${vendorVATIsoCountryCode}" >
							<TaxRegistrationNumber >${vendorTaxRegistrationNumber}</TaxRegistrationNumber>
						</TaxRegistration>
					</Vendor>
					<Purchase purchaseClass="${purchaseClass}" >${purchase}</Purchase>
					<UnitPrice >10.0</UnitPrice>
					<ExtendedPrice >${extendedPrice}</ExtendedPrice>
					<CommodityCode commodityCodeType="${commodityCodeType}">${commodityCode}</CommodityCode>
					<FlexibleFields >
                    <FlexibleCodeField fieldId="1">${flexibleField1}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="2">${flexibleField2}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="3">${flexibleField3}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="4">${flexibleField4}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="4">${flexibleField4}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="5">${flexibleField5}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="6">${flexibleField6}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="7">${flexibleField7}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="8">${flexibleField8}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="9">${flexibleField9}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="10">${flexibleField10}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="11">${flexibleField11}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="12">${flexibleField12}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="13">${flexibleField13}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="14">${flexibleField14}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="15">${flexibleField15}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="16">${flexibleField16}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="17">${flexibleField17}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="18">${flexibleField18}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="19">${flexibleField19}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="20">${flexibleField20}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="21">${flexibleField21}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="22">${flexibleField22}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="23">${flexibleField23}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="24">${flexibleField24}</FlexibleCodeField>
                    <FlexibleCodeField fieldId="25">${flexibleField25}</FlexibleCodeField>
					</FlexibleFields>
				</LineItem>
			</PurchaseOrderRequest>
			<ApplicationData>
				<MessageLogging returnLogEntries="true">
					<OverrideLoggingThreshold thresholdScope="com.vertexinc.tps.common.domain.Transaction">SUPPORT</OverrideLoggingThreshold>
					<OverrideLoggingThreshold>SUPPORT</OverrideLoggingThreshold>
				</MessageLogging>
			</ApplicationData>
		</urn:VertexEnvelope>
	</soapenv:Body>
</soapenv:Envelope>`;

  return Purchase_Order_2Parties2ndPositionXMLString;
};
