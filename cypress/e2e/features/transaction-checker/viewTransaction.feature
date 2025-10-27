  
# Feature: View Transaction Module

#   Background:
#     Given I visit the FMS page
#     When I login as catosdstaff
#     Then I should be redirected to treasury operations
#       | assertions |
#       | exist      |
#       | be.visible |
# @skip
#   Scenario Outline: Verify Filter Search by <searchType>
#     Given I click the "Filter By" Dropdown and select "<searchType>"
#     And I type "<searchValue>" on the Search Bar
#     When I click on Search Button
#     Then the "<searchType>" column should only contain "<searchValue>"
#       | assertions   | value         |
#       | exist        |               |
#       | be.visible   |               |
#       | contain.text | <searchValue> |

#     Examples:
#       | searchType      | searchValue           |
#       | Client Mnemonic | DEVBAURE2             |
#       | Client Name     | DEV1 AND DEV2 OR DEV3 |
#       | MOSE Ref No     | SPROD-7F99873F-092625 |
#       | Product         | FX Swap               |
#       | Status          | PENDING APPROVAL      |
#       | Branch Code     | 484                   |
#       | Branch Mnemonic | MALANDAY              |
#       | Originator      | test fname test lname |
# @skip
#   Scenario Outline: Verify Filter Search by <searchType> with <clientType> Client Type
#     Given I click the "Filter By" Dropdown and select "<searchType>"
#     And I type "<searchValue>" on the Search Bar
#     And I click the "Client Type" Dropdown and select "<clientType>"
#     When I click on Search Button
#     Then the "<searchType>" column should only contain "<searchValue>"
#       | assertions   | value         |
#       | exist        |               |
#       | be.visible   |               |
#       | contain.text | <searchValue> |

#     Examples:
#       | searchType      | searchValue           | clientType |
#       | Client Mnemonic | DEVBAURE2             | Retail     |
#       | Client Name     | DEV1 AND DEV2 OR DEV3 | Retail     |
#       | MOSE Ref No     | SPROD-7F99873F-092625 | Retail     |
#       | Product         | FX Swap               | Retail     |
#       | Status          | PENDING APPROVAL      | Retail     |
#       | Branch Code     | 484                   | Retail     |
#       | Branch Mnemonic | MALANDAY              | Retail     |
#       | Originator      | test fname test lname | Retail     |
#       | Client Mnemonic | DEVBAURE2             | Corporate  |
#       | Client Name     | DEV1 AND DEV2 OR DEV3 | Corporate  |
#       | MOSE Ref No     | ASWAP-44F3D2B0-092425 | Corporate  |
#       | Product         | FX Swap               | Corporate  |
#       | Status          | PENDING APPROVAL      | Corporate  |
#       | Branch Code     | 484                   | Corporate  |
#       | Branch Mnemonic | MALANDAY              | Corporate  |
#       | Originator      | test fname test lname | Corporate  |
# @skip
#   Scenario Outline: Verify Filter Search by <searchType> with <clientType> <retailClientType>
#     Given I click the "Filter By" Dropdown and select "<searchType>"
#     And I type "<searchValue>" on the Search Bar
#     And I click the "Client Type" Dropdown and select "<clientType>"
#     And I click the "Retail Client Type" Dropdown and select "<retailClientType>"
#     When I click on Search Button
#     Then the "<searchType>" column should only contain "<searchValue>"
#       | assertions   | value         |
#       | exist        |               |
#       | be.visible   |               |
#       | contain.text | <searchValue> |

#     Examples:
#       | searchType      | searchValue           | clientType | retailClientType   |
#       | Client Mnemonic | DEVBAURE2             | Retail     | Individual Account |
#       | Client Name     | DEV1 AND DEV2 OR DEV3 | Retail     | Individual Account |
#       | MOSE Ref No     | FXOBO-B513ACC4-100825 | Retail     | Individual Account |
#       | Product         | FX Swap               | Retail     | Individual Account |
#       | Status          | PENDING APPROVAL      | Retail     | Individual Account |
#       | Branch Code     | 484                   | Retail     | Individual Account |
#       | Branch Mnemonic | MALANDAY              | Retail     | Individual Account |
#       | Originator      | test fname test lname | Retail     | Individual Account |
#       | Client Mnemonic | DEVBAURE2             | Retail     | Joint Account      |
#       | Client Name     | DEV1 AND DEV2 OR DEV3 | Retail     | Joint Account      |
#       | MOSE Ref No     | EPFXT-7EEE9788-093025 | Retail     | Joint Account      |
#       | Product         | FX Swap               | Retail     | Joint Account      |
#       | Status          | PENDING APPROVAL      | Retail     | Joint Account      |
#       | Branch Code     | 484                   | Retail     | Joint Account      |
#       | Branch Mnemonic | MALANDAY              | Retail     | Joint Account      |
#       | Originator      | test fname test lname | Retail     | Joint Account      |

#   Scenario Outline: Verify amendment of <clientType> transaction for <searchValue> product

#     Given I visit the FMS page
#     When I login as tlagmay
#     Then I should be redirected to markets sales
#       | assertions |
#       | exist      |
#       | be.visible |

#     And I forcebly open MOSE Ref No "<moseReferenceNum>"

#     And I click "Upload New Document"

#     And I amend the following documents: "<documentsAmended>"
#     And I insert a remark on the following documents: "<documentsRemarked>"
#     And I click "Send button"

#     Then the latest status of the document "<documentsAmended>" should have the following conditions:
#       | assertions    | value            |
#       | exist         |                  |
#       | be.visible    |                  |
#       | contain.value | PENDING APPROVAL |

#     Examples:
#       | productType                                     | clientType | moseReferenceNum      | documentsAmended                                                                        | documentsRemarked                                                                                               |
#       # | Asset Swap                                      | Retail     | ASWAP-615E2BE4-100925 | All                                                                                     |                                                                                                                 |
#       # | Credit Default Swap                             | Retail     | COCDS-4CB80E23-100925 | All                                                                                     |                                                                                                                 |
#       # | Cross Currency Swap                             | Retail     | CCSHD-DFD6D09C-100925 | All                                                                                     |                                                                                                                 |
#       # | Deposit Plus (FX against PHP)                   | Retail     | DPPHP-A6816445-100925 | All                                                                                     |                                                                                                                 |
#       # | Deposit Plus (Third currency)                   | Retail     | DPTRD-8B964904-100925 | All                                                                                     |                                                                                                                 |
#       # | Derivative (Termsheet & RDS only)               | Retail     | FXOSO-2F905708-100925 | All                                                                                     |                                                                                                                 |
#       # | Derivative (with Order at Expiry)               | Retail     | PFXOP-23ECDDC8-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Forward                                      | Retail     | FWDHD-3145EAE7-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Option                                       | Retail     | FXOBO-9BBFC250-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Spot                                         | Retail     | EPFXT-77174FDB-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Spot and Fixed Income                        | Retail     | EPFXB-84681A22-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Swap                                         | Retail     | FFXSW-77E6CC9E-100925 | All                                                                                     |                                                                                                                 |
#       # | Fixed Income                                    | Retail     | FIREG-0A955F14-100925 | All                                                                                     |                                                                                                                 |
#       # | Interest Rate Swap                              | Retail     | INTRS-40F87608-100925 | All                                                                                     |                                                                                                                 |
#       # | Leverage for Investors                          | Retail     | LEINV-FDB6C4F6-100925 | All                                                                                     |                                                                                                                 |
#       # | MB CHINA TIME DEPOSIT                           | Retail     | TDCTD-123A894A-100925 | All                                                                                     |                                                                                                                 |
#       # | Non Deliverable Forward                         | Retail     | ONNDF-5AFA15C3-100925 | All                                                                                     |                                                                                                                 |
#       # | Non Deliverable Swap                            | Retail     | MBCLH-BC38CF6A-100925 | All                                                                                     |                                                                                                                 |
#       # | Structured Product - GPN Book Building Order    | Retail     | GBBSP-870ADFF3-100925 | All                                                                                     |                                                                                                                 |
#       # | Structured Product - Global Peso Note           | Retail     | GPNSP-2BE49B81-100925 | All                                                                                     |                                                                                                                 |
#       # | Structured Products                             | Retail     | SPROD-8EA181C0-100925 | All                                                                                     |                                                                                                                 |
#       | Treasury Time Deposit                           | Retail     | TDPRT-F93F0881-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Asset Swap                             | Retail     | UNSEC-851CA2A4-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Deposit Plus                           | Retail     | UNTDL-28D845A7-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Fixed Income and standalone Derivative | Retail     | UWCFF-25E6E7FD-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Structured Product                     | Retail     | UNWSP-676F28BF-100925 | All                                                                                     |                                                                                                                 |
#       # | Asset Swap                                      | Corporate  | ASWAP-966B3A5D-100925 | All                                                                                     |                                                                                                                 |
#       # | Credit Default Swap                             | Corporate  | COCDS-74B4834B-100925 | All                                                                                     |                                                                                                                 |
#       # | Cross Currency Swap                             | Corporate  | CCSHD-BA913B6D-100925 | All                                                                                     |                                                                                                                 |
#       # | Deposit Plus (FX against PHP)                   | Corporate  | DPPHP-BF64F486-100925 | All                                                                                     |                                                                                                                 |
#       # | Deposit Plus (Third currency)                   | Corporate  | DPTRD-6A4F44C7-100925 | All                                                                                     |                                                                                                                 |
#       # | Derivative (Termsheet & RDS only)               | Corporate  | FXOSO-60946994-100925 | All                                                                                     |                                                                                                                 |
#       # | Derivative (with Order at Expiry)               | Corporate  | PFXOP-BEC087FE-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Forward                                      | Corporate  | FWDHD-45AA73AB-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Option                                       | Corporate  | FXOBO-58E19364-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Spot                                         | Corporate  | EPFXT-738FDD4C-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Spot and Fixed Income                        | Corporate  | EPFXB-32D0FC0B-100925 | All                                                                                     |                                                                                                                 |
#       # | FX Swap                                         | Corporate  | FFXSW-5DA37A43-100925 | All                                                                                     |                                                                                                                 |
#       # | Fixed Income                                    | Corporate  | FIREG-E60ED39B-100925 | All                                                                                     |                                                                                                                 |
#       # | Interest Rate Swap                              | Corporate  | INTRS-AE25F903-100925 | All                                                                                     |                                                                                                                 |
#       # | Leverage for Investors                          | Corporate  | LEINV-E7377BC1-100925 | All                                                                                     |                                                                                                                 |
#       # | MB CHINA TIME DEPOSIT                           | Corporate  | TDCTD-5C68E8E7-100925 | All                                                                                     |                                                                                                                 |
#       # | Non Deliverable Forward                         | Corporate  | ONNDF-1E5AB456-100925 | All                                                                                     |                                                                                                                 |
#       # | Non Deliverable Swap                            | Corporate  | MBCLH-9DDE9AB9-100925 | All                                                                                     |                                                                                                                 |
#       # | Structured Product - GPN Book Building Order    | Corporate  | GBBSP-306B0A8C-100925 | All                                                                                     |                                                                                                                 |
#       # | Structured Product - Global Peso Note           | Corporate  | GPNSP-1A8BE0A8-100925 | All                                                                                     |                                                                                                                 |
#       # | Structured Products                             | Corporate  | SPROD-FA5BEF76-100925 | All                                                                                     |                                                                                                                 |
#       # | Treasury Time Deposit                           | Corporate  | TDPRT-2C43EDAD-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Asset Swap                             | Corporate  | UNSEC-0DFB2461-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Deposit Plus                           | Corporate  | UNTDL-8331FBB7-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Fixed Income and standalone Derivative | Corporate  | UWCFF-65F313B3-100925 | All                                                                                     |                                                                                                                 |
#       # | Unwind - Structured Product                     | Corporate  | UNWSP-980503FD-100925 | All                                                                                     |                                                                                                                 |
  
#       # | Credit Default Swap                             | Corporate  | FXOBO-FDA01A80-100925 | [['Termsheet'], ['Deed of Assignment'], ['Product Specific Risk Disclosure Statement']] | [['Termsheet', 'pogs'], ['Deed of Assignment','borox'], ['Product Specific Risk Disclosure Statement','kreme']] |

  
# @skip
#   Scenario Outline: Verify cancellation of <clientType> transaction for <productType> product

#     Given I visit the FMS page
#     When I login as tlagmay
#     Then I should be redirected to markets sales
#       | assertions |
#       | exist      |
#       | be.visible |
#     And I forcebly open MOSE Ref No "<moseReferenceNum>"

#     And I click "Cancel Transaction"
#     And I type "<remarks>" on the cancel remarks
#     And I click "Ok button"

#     Then I visit the FMS page
#     Then I login as catosdofficer
#     Then I should be redirected to treasury operations
#     And I click the "Filter By" Dropdown and select "MOSE Ref No"
#     And I type "<moseReferenceNum>" on the Search Bar
#     Then I click on Search Button

#     Then the "Status" column should only contain "CANCELLED"
#       | assertions   | value     |
#       | exist        |           |
#       | be.visible   |           |
#       | contain.text | CANCELLED |

#     Examples:
#       | productType                                     | clientType | moseReferenceNum      | remarks                        |
#       | Asset Swap                                      | Retail     | ASWAP-F0775D98-100925 | Automated Cancellation Process |
#       | Credit Default Swap                             | Retail     | COCDS-E0411A65-100925 | Automated Cancellation Process |
#       | Cross Currency Swap                             | Retail     | CCSHD-6C4FAA5E-100925 | Automated Cancellation Process |
#       | Deposit Plus (FX against PHP)                   | Retail     | DPPHP-432E0CD8-100925 | Automated Cancellation Process |
#       | Deposit Plus (Third currency)                   | Retail     | DPTRD-4331CE87-100925 | Automated Cancellation Process |
#       | Derivative (Termsheet & RDS only)               | Retail     | FXOSO-E095EE51-100925 | Automated Cancellation Process |
#       | Derivative (with Order at Expiry)               | Retail     | PFXOP-0C7685FB-100925 | Automated Cancellation Process |
#       | FX Forward                                      | Retail     | FWDHD-BA1149DB-100925 | Automated Cancellation Process |
#       | FX Option                                       | Retail     | FXOBO-A9CBF7B9-100925 | Automated Cancellation Process |
#       | FX Spot                                         | Retail     | EPFXT-6E4BE85F-100925 | Automated Cancellation Process |
#       | FX Spot and Fixed Income                        | Retail     | EPFXB-08BF3F51-100925 | Automated Cancellation Process |
#       | FX Swap                                         | Retail     | FFXSW-FF4285C7-100925 | Automated Cancellation Process |
#       | Fixed Income                                    | Retail     | FIREG-403DFB53-100925 | Automated Cancellation Process |
#       | Interest Rate Swap                              | Retail     | INTRS-0BD44ABB-100925 | Automated Cancellation Process |
#       | Leverage for Investors                          | Retail     | LEINV-2E9BAAA5-100925 | Automated Cancellation Process |
#       | MB CHINA TIME DEPOSIT                           | Retail     | TDCTD-A5DEDD72-100925 | Automated Cancellation Process |
#       | Non Deliverable Forward                         | Retail     | ONNDF-CB0EAD5C-100925 | Automated Cancellation Process |
#       | Non Deliverable Swap                            | Retail     | MBCLH-9F882847-100925 | Automated Cancellation Process |
#       | Structured Product - GPN Book Building Order    | Retail     | GBBSP-A495818F-100925 | Automated Cancellation Process |
#       | Structured Product - Global Peso Note           | Retail     | GPNSP-07D5981F-100925 | Automated Cancellation Process |
#       | Structured Products                             | Retail     | SPROD-65E97C8C-100925 | Automated Cancellation Process |
#       | Treasury Time Deposit                           | Retail     | TDPRT-732A9B69-100925 | Automated Cancellation Process |
#       | Unwind - Asset Swap                             | Retail     | UNSEC-026A944A-100925 | Automated Cancellation Process |
#       | Unwind - Deposit Plus                           | Retail     | UNTDL-77C12AA5-100925 | Automated Cancellation Process |
#       | Unwind - Fixed Income and standalone Derivative | Retail     | UWCFF-BC6FC7D9-100925 | Automated Cancellation Process |
#       | Unwind - Structured Product                     | Retail     | UNWSP-B7906FF7-100925 | Automated Cancellation Process |
#       | Asset Swap                                      | Corporate  | ASWAP-6C141703-100925 | Automated Cancellation Process |
#       | Credit Default Swap                             | Corporate  | COCDS-35D28B79-100925 | Automated Cancellation Process |
#       | Cross Currency Swap                             | Corporate  | CCSHD-19327F49-100925 | Automated Cancellation Process |
#       | Deposit Plus (FX against PHP)                   | Corporate  | DPPHP-54C75E29-100925 | Automated Cancellation Process |
#       | Deposit Plus (Third currency)                   | Corporate  | DPTRD-99993FCA-100925 | Automated Cancellation Process |
#       | Derivative (Termsheet & RDS only)               | Corporate  | FXOSO-D8C5B9C1-100925 | Automated Cancellation Process |
#       | Derivative (with Order at Expiry)               | Corporate  | PFXOP-33585D68-100925 | Automated Cancellation Process |
#       | FX Forward                                      | Corporate  | FWDHD-DED48AD1-100925 | Automated Cancellation Process |
#       | FX Option                                       | Corporate  | FXOBO-03FA8E18-100925 | Automated Cancellation Process |
#       | FX Spot                                         | Corporate  | EPFXT-CD15F161-100925 | Automated Cancellation Process |
#       | FX Spot and Fixed Income                        | Corporate  | EPFXB-5B997552-100925 | Automated Cancellation Process |
#       | FX Swap                                         | Corporate  | FFXSW-F3D80BA3-100925 | Automated Cancellation Process |
#       | Fixed Income                                    | Corporate  | FIREG-F062BBE8-100925 | Automated Cancellation Process |
#       | Interest Rate Swap                              | Corporate  | INTRS-A7C59FF3-100925 | Automated Cancellation Process |
#       | Leverage for Investors                          | Corporate  | LEINV-DFC78E4D-100925 | Automated Cancellation Process |
#       | MB CHINA TIME DEPOSIT                           | Corporate  | TDCTD-63B011EF-100925 | Automated Cancellation Process |
#       | Non Deliverable Forward                         | Corporate  | ONNDF-00A6F59D-100925 | Automated Cancellation Process |
#       | Non Deliverable Swap                            | Corporate  | MBCLH-7093E086-100925 | Automated Cancellation Process |
#       | Structured Product - GPN Book Building Order    | Corporate  | GBBSP-BF944E49-100925 | Automated Cancellation Process |
#       | Structured Product - Global Peso Note           | Corporate  | GPNSP-898EF079-100925 | Automated Cancellation Process |
#       | Structured Products                             | Corporate  | SPROD-9850BB11-100925 | Automated Cancellation Process |
#       | Treasury Time Deposit                           | Corporate  | TDPRT-B3B2B0E0-100925 | Automated Cancellation Process |
#       | Unwind - Asset Swap                             | Corporate  | UNSEC-2C9FB348-100925 | Automated Cancellation Process |
#       | Unwind - Deposit Plus                           | Corporate  | UNTDL-033B0361-100925 | Automated Cancellation Process |
#       | Unwind - Fixed Income and standalone Derivative | Corporate  | UWCFF-FBEEB936-100925 | Automated Cancellation Process |
#       | Unwind - Structured Product                     | Corporate  | UNWSP-EC10A362-100925 | Automated Cancellation Process |
# @skip
#   Scenario Outline: Verify can download <documentCount> document upon view of transaction for <clientType> transaction for <searchValue> product
#     Given I am on "Treasury Operations" page
#       | assertions |
#       | exist      |
#       | be.visible |
#     And I click the "Filter By" Dropdown and select "Product"
#     And I type "<searchValue>" on the Search Bar
#     And I click the "Client Type" Dropdown and select "<clientType>"
#     Then I click on Search Button
#     # And I click on a random row
#     And I click on Row # "1"
#     Then I download "<documentCount>" document
#       | assertions |
#       | exist      |

#     Examples:
#       | searchValue                                     | clientType | documentCount |
#       | Asset Swap                                      | Retail     | 1             |
#       | Credit Default Swap                             | Retail     | 2 random      |
#       | Cross Currency Swap                             | Retail     | 1             |
#       | Deposit Plus (FX against PHP)                   | Retail     | 3             |
#       | Deposit Plus (Third currency)                   | Retail     | 1             |
#       | Derivative (Termsheet & RDS only)               | Retail     | 2 random      |
#       | Derivative (with Order at Expiry)               | Retail     | 1             |
#       | FX Forward                                      | Retail     | 1             |
#       | FX Option                                       | Retail     | 2 random      |
#       | FX Spot                                         | Retail     | 1             |
#       | FX Spot and Fixed Income                        | Retail     | 1             |
#       | FX Swap                                         | Retail     | All           |
#       | Fixed Income                                    | Retail     | 1             |
#       | Interest Rate Swap                              | Retail     | 1             |
#       | Leverage for Investors                          | Retail     | 2 random      |
#       | MB CHINA TIME DEPOSIT                           | Retail     | 1             |
#       | Non Deliverable Forward                         | Retail     | 1             |
#       | Non Deliverable Swap                            | Retail     | 3             |
#       | Structured Product - GPN Book Building Order    | Retail     | 1             |
#       | Structured Product - Global Peso Note           | Retail     | 2             |
#       | Structured Products                             | Retail     | 1             |
#       | Treasury Time Deposit                           | Retail     | 1             |
#       | Unwind - Asset Swap                             | Retail     | 1             |
#       | Unwind - Deposit Plus                           | Retail     | 1             |
#       | Unwind - Fixed Income and standalone Derivative | Retail     | 2             |
#       | Unwind - Structured Product                     | Retail     | 1             |
#       | Asset Swap                                      | Corporate  | 3             |
#       | Credit Default Swap                             | Corporate  | 1             |
#       | Cross Currency Swap                             | Corporate  | 1             |
#       | Deposit Plus (FX against PHP)                   | Corporate  | 1             |
#       | Deposit Plus (Third currency)                   | Corporate  | 2 random      |
#       | Derivative (Termsheet & RDS only)               | Corporate  | 1             |
#       | Derivative (with Order at Expiry)               | Corporate  | 1             |
#       | FX Forward                                      | Corporate  | 1 random      |
#       | FX Option                                       | Corporate  | 1             |
#       | FX Spot                                         | Corporate  | 1             |
#       | FX Spot and Fixed Income                        | Corporate  | 1             |
#       | FX Swap                                         | Corporate  | 2             |
#       | Fixed Income                                    | Corporate  | 1             |
#       | Interest Rate Swap                              | Corporate  | 1             |
#       | Leverage for Investors                          | Corporate  | 2 random      |
#       | MB CHINA TIME DEPOSIT                           | Corporate  | 1             |
#       | Non Deliverable Forward                         | Corporate  | 1             |
#       | Non Deliverable Swap                            | Corporate  | 1             |
#       | Structured Product - GPN Book Building Order    | Corporate  | 2             |
#       | Structured Product - Global Peso Note           | Corporate  | 1             |
#       | Structured Products                             | Corporate  | 1             |
#       | Treasury Time Deposit                           | Corporate  | 2             |
#       | Unwind - Asset Swap                             | Corporate  | 1             |
#       | Unwind - Deposit Plus                           | Corporate  | 1             |
#       | Unwind - Fixed Income and standalone Derivative | Corporate  | 1 random      |
#       | Unwind - Structured Product                     | Corporate  | 1             |