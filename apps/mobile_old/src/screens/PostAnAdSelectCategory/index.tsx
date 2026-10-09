import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingBottom: 124,
					shadowColor: "#00000040",
					shadowOpacity: 0.3,
					shadowOffset: {
					    width: 0,
					    height: 25
					},
					shadowRadius: 50,
					elevation: 50,
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						paddingVertical: 14,
						paddingHorizontal: 16,
						marginBottom: 16,
						shadowColor: "#0000000D",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 1
						},
						shadowRadius: 2,
						elevation: 2,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingHorizontal: 4,
							marginBottom: 12,
						}}>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 12,
								fontWeight: "bold",
							}}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2ftj8lhv_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 41,
								height: 11,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingVertical: 2,
							marginBottom: 12,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3hrdzx5j_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 36,
								height: 36,
							}}
						/>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 18,
								fontWeight: "bold",
							}}>
							{"Select Category"}
						</Text>
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#FFDBCF",
								borderRadius: 9999,
								paddingVertical: 4,
								paddingHorizontal: 10,
							}}>
							<Text 
								style={{
									color: "#FC6901",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Step 1 of 3"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#DCE2F3",
							borderRadius: 9999,
						}}>
						<View 
							style={{
								width: 135,
								height: 4,
								backgroundColor: "#FC6901",
								borderRadius: 9999,
							}}>
						</View>
					</View>
				</View>
				<View 
					style={{
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							marginBottom: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 4,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5bfcssrp_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 15,
									height: 15,
									marginRight: 6,
								}}
							/>
							<Text 
								style={{
									color: "#FC6901",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"NEW CLASSIFIED LISTING"}
							</Text>
						</View>
						<View 
							style={{
								marginBottom: 3,
							}}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 24,
									fontWeight: "bold",
								}}>
								{"What are you listing today?"}
							</Text>
						</View>
						<View >
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 14,
								}}>
								{"Choose an exact category to help potential buyers\nfind your offer rapidly."}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 9999,
							borderWidth: 1,
							marginBottom: 16,
							shadowColor: "#0000000D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 2,
							elevation: 2,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8sony09r_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 29,
								height: 44,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								flex: 1,
								marginRight: 15,
							}}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 16,
								}}>
								{"Search categories..."}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hfitjq47_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 25,
								height: 39,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 16,
						}}>
						<Text 
							style={{
								color: "#555F6F",
								fontSize: 10,
								fontWeight: "bold",
								marginRight: 8,
							}}>
							{"Popular:"}
						</Text>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 4,
								paddingHorizontal: 13,
								marginRight: 9,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"iPhone 15"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 4,
								paddingHorizontal: 13,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Sedan Cars"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 4,
								paddingHorizontal: 13,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Apartments"}
							</Text>
						</TouchableOpacity>
					</View>
					<View 
						style={{
							paddingTop: 4,
							marginBottom: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 10,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wwplwbkx_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 40,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 53,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Mobiles & Tablets"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 205,
											}}>
											{"Smartphones, accessories, tablets •\n14,290+ ads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/o6mkerf6_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 10,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/aqrphyk4_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 43,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 91,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Vehicles & Cars"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 226,
											}}>
											{"Cars, motorcycles, spare parts • 8,740+\nads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/m208swug_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 10,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gocdor1x_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 41,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 73,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
													width: 169,
												}}>
												{"Electronics & Home\nAppliances"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Laptops, TVs, audio, gaming • 19,830+ ads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2u3ls7zr_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 10,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kawu2avq_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 43,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 25,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Property for Sale & Rent"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 231,
											}}>
											{"Apartments, villas, plots, shops • 6,420+\nads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ir1h5040_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 10,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/89irc92u_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 40,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 44,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Furniture & Home Decor"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 251,
											}}>
											{"Sofas, dining tables, interior lighting • 5,110+\nads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/c9ik0uxn_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 10,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wvtlx8ak_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 37,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 84,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Fashion & Beauty"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 233,
											}}>
											{"Clothing, watches, footwear, cosmetics •\n11,350+ ads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/7cuxiyex_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gkhbuw0a_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 39,
										height: 44,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 76,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Services & Jobs"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 215,
											}}>
											{"Repairs, education, hiring vacancies •\n3,890+ ads"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/mzg5om9f_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 6,
									height: 10,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F0F3FF",
							borderColor: "#DCE2F3",
							borderRadius: 12,
							borderWidth: 1,
							padding: 15,
							marginTop: 4,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/6o6yjh82_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 12,
								width: 16,
								height: 20,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								flex: 1,
							}}>
							<View >
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Verified Seller Protection"}
								</Text>
							</View>
							<View >
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"Selecting the accurate category doubles your\nverified buyer inquiries within 24 hours."}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}